const asyncHandler =require('express-async-handler');

const foodcategory =require('../models/foodcategoryModel');
const Waiter =require('../models/waiterModel');
const Table =require('../models/tableModel');
const Customer =require('../models/customerModel');
const Foodmenu =require('../models/foodmenuModel');
const Pos  =require('../models/posModels');


//Food Category
const getposCategory =asyncHandler(async (req,res) =>{
    try {
        const getfoodcat = await foodcategory.find();
        res.json(getfoodcat);
      } catch (error) {
        throw new Error(error);
      }

});

//Waiter Modal
const getPosWaiter =asyncHandler(async (req,res) =>{
  try {
      const getWaiter = await Waiter.find();
      res.json(getWaiter);
    } catch (error) {
      throw new Error(error);
    }

});
//Customer Model
const getCustomer =asyncHandler(async (req,res) =>{
  try {
      const getCustomer = await Customer.find();
      res.json(getCustomer);
    } catch (error) {
      throw new Error(error);
    }

});
//Table Model
const getTable =asyncHandler(async (req,res) =>{
  try {
      const getTable = await Table.find();
      res.json(getTable);
    } catch (error) {
      throw new Error(error);
    }

});


const getposFooditems =asyncHandler(async (req,res) =>{
  try {
    const posfoodmenu = await Foodmenu.aggregate([
      {
        $lookup: {
          from: 'foodcategories',
          localField: 'foodcategoryId',
          foreignField: '_id',
          as: 'foodcategory',
        },
      },
      {
        $unwind: '$foodcategory',
      },
      {
        $lookup: {
          from: 'vats',
          localField: 'vatId',
          foreignField: '_id',
          as: 'vat',
        },
      },
      {
        $unwind: '$vat',
      },
      
    ]);
  
    res.json(posfoodmenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }

});


const insertPos =asyncHandler(async(req,res) =>{
  try {
    const  {customers,options,grandTotal,cart,vatAmount,total,foodoption,waiterId,tableId}  = req.body;
  console.log(req.body);

 const sequence = await Pos.findOne({}).sort('-ordernumber'); // Find the latest ID

    let nextIdNumber = 'Burp01001023001';

    if (sequence && sequence.ordernumber) {
      // Extract and increment the numeric part of the latest ID
      const lastIdNumber = sequence.ordernumber;
      const numericPart = lastIdNumber.substring(11); // Extract the numeric part
      const nextNumericValue = parseInt(numericPart, 10) + 1;
      nextIdNumber = `Burp0100102${nextNumericValue.toString().padStart(3, '0')}`;
    }

    // Check if the ID number already exists
    const exists = await Pos.findOne({ ordernumber: nextIdNumber });

    if (exists) {
      return res.status(400).json({ error: 'ID number already exists' });
    }

    const newEntry = new Pos({ 
      ordernumber: nextIdNumber,
      customers:customers,
      options:foodoption,
      cart:cart,
      total:total,
      grandTotal:grandTotal,
      vatAmount:vatAmount,
      waiterId:waiterId,
      tableId:tableId,


     
    
    });
    await newEntry.save();

 

  // const cartz =req.body.cart;
  // console.log(cartz);
  //  const carts =[];

  //  for (let i = 0; i < cartz.length; i++) {
  //   let object = {};
  //   object.foodmenuId = cartz[i]._id;
  //   object.salesprice = cartz[i].salesprice;
  //   object.quantity = cartz[i].quantity;
   
  //   carts.push(object);
  // }

  //  console.log(carts);


    // // Create a new FoodItem document and save it to the database
    // const newFoodItem = new Pos(data);
      ///await newFoodItem.save();

    res.json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while inserting data' });
  }
})


const getAllPos =asyncHandler(async(req,res) =>{
  try {
    // const getAllPos = await Pos.find();
    // res.json(getAllPos);
    const pos = await Pos.aggregate([
      {
        $unwind: "$cart" // Flatten the cart array
      },
      {
        $lookup: {
          from: "foodmenus",
          localField: "cart.foodmenuId",
          foreignField: "_id",
          as: "menuItemDetails"
        }
      },
      {
        $unwind: "$menuItemDetails" // Unwind the menuItemDetails array
      },

      {
        $lookup: {
          from: "customers",
          localField: "customers",
          foreignField: "_id",
          as: "customerDetails"
        }
      },
      {
        $unwind: "$customerDetails"
      },
      {
        $lookup: {
          from: "waiters",
          localField: "waiterId",
          foreignField: "_id",
          as: "waiterDetails"
        }
      },
      {
        $unwind: "$waiterDetails"
      },
      {
        $lookup: {
          from: "tables",
          localField: "tableId",
          foreignField: "_id",
          as: "tableDetails"
        }
      },
      {
        $unwind: "$tableDetails"
      },
      {
        $group: {
          _id: "$_id",
          ordernumber:{$first: "$ordernumber"},
          options: { $first: "$options" },
          total: { $first: "$total" },
          grandTotal: { $first: "$grandTotal" },
          vatAmount: { $first: "$vatAmount" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
          cart: {
            $push: {
              foodmenuId: "$cart.foodmenuId",
              salesprice: "$cart.salesprice",
              quantity: "$cart.quantity",
              menuItemDetails: "$menuItemDetails"
            }
          },
          customerDetails: { $first: "$customerDetails" },
        //  tableDetails: { $first: "$tableDetails" },
        tableDetails: {
          $first: {
            $cond: {
              if: { $eq: ["$tableDetails", []] },
              then: null, // or any default value for empty tableDetails
              else: "$tableDetails"
            }
          }
        },
          waiterDetails: { $first: "$waiterDetails" }
        }
      }
      
    ]);
  
    res.json(pos);
  } catch (error) {
    throw new Error(error);
  }
});

const runningOrder =asyncHandler(async(req,res) =>{

  try {
    const runningorder = await Pos.aggregate([
      {
        $match: {
          paymentstatus: "notpaid"
        }
      },

      {
        $lookup: {
          from: 'tables',
          localField: 'tableId',
          foreignField: '_id',
          as: 'table',
        },
      },
      {
        $unwind: '$table',
      },
      {
        $lookup: {
          from: 'waiters',
          localField: 'waiterId',
          foreignField: '_id',
          as: 'waiter',
        },
      },
      {
        $unwind: '$waiter',
      },
      

    ]);
    res.json(runningorder);
    // Use Mongoose to find orders where paymentstatus is "notpaid"
   // const notPaidOrders = await Pos.find({ paymentstatus: 'notpaid' });

   // res.json(notPaidOrders);
  } catch (error) {
    console.error('Error fetching "notpaid" orders:', error);
  
  }

})


module.exports = {getposCategory,getPosWaiter,getCustomer,getTable,getposFooditems,insertPos,getAllPos,runningOrder};