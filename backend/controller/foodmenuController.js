const asyncHandler =require('express-async-handler');
const Foodmenu =require('../models/foodmenuModel');
const foodcategory =require('../models/foodcategoryModel');
const Ingredients =require('../models/ingredientsModel');
const vat =require('../models/vatModel');



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


const creatFoodmenu =asyncHandler(async(req,res) =>{

  const foodmenuname =req.body.foodmenuname;
  const findFoodmenu =await Foodmenu.findOne({ foodmenuname:foodmenuname });
  if(!findFoodmenu)
  {
      //Create a new User
      const newFoodcategory =Foodmenu.create(req.body);
      res.json(newFoodcategory);
  }
  else{
     
      throw new Error("Category Already Exist");

  }


})

module.exports = {getfoodCategory,getingredients,getvat,creatFoodmenu};