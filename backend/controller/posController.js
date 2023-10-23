const asyncHandler =require('express-async-handler');

const foodcategory =require('../models/foodcategoryModel');


const getposCategory =asyncHandler(async (req,res) =>{
    try {
        const getfoodcat = await foodcategory.find();
        res.json(getfoodcat);
      } catch (error) {
        throw new Error(error);
      }

});


module.exports = {getposCategory};