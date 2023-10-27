const asyncHandler =require('express-async-handler');

const foodcategory =require('../models/foodcategoryModel');
const Waiter =require('../models/waiterModel');
const Table =require('../models/tableModel');
const Customer =require('../models/customerModel');
const Foodmenu =require('../models/foodmenuModel');

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


module.exports = {getposCategory,getPosWaiter,getCustomer,getTable,getposFooditems};