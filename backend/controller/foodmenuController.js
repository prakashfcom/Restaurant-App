const asyncHandler =require('express-async-handler');
const Foodmenu =require('../models/foodmenuModel');
const foodcategory =require('../models/foodcategoryModel');
const Ingredients =require('../models/ingredientsModel');
const vat =require('../models/vatModel');
const { default: mongoose } = require("mongoose");

const multer = require('multer');
const Schema = mongoose.Schema;
const itemSchema = new Schema({ data: String });



const getfoodCategory =asyncHandler(async (req,res) =>{
    try {
        const getfoodcat = await foodcategory.find();
        res.json(getfoodcat);
      } catch (error) {
        throw new Error(error);
      }

});

const getingredients =asyncHandler(async (req,res) =>{
    try {
        const geting = await Ingredients.find();
        res.json(geting);
      } catch (error) {
        throw new Error(error);
      }

});

const getvat =asyncHandler(async(req,res) =>{
    try {
        const getvat = await vat.find();
        res.json(getvat);
      } catch (error) {
        throw new Error(error);
      }
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // The directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename
//   },
// });

// const upload = multer({ storage: storage });


const creatFoodmenu =asyncHandler(async(req,res) =>{

  const foodmenuname =req.body.foodmenuname;
  // const upload = multer({ storage }).single("photo");
  const findFoodmenu =await Foodmenu.findOne({ foodmenuname:foodmenuname });
  if(!findFoodmenu)
  {
      //Create a new User
      const newFoodcategory =Foodmenu.create(req.body);
      res.json(newFoodcategory);
  }
  else{
     
      throw new Error("Foodmenu Name Already Exist");

  }



});





const getallfoods =asyncHandler(async(req,res) =>{


  try {
    const foodmenu = await Foodmenu.aggregate([
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
    const base64Data = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWN...";
   
    res.json(foodmenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }

});



module.exports = {getfoodCategory,getingredients,getvat,creatFoodmenu,getallfoods};