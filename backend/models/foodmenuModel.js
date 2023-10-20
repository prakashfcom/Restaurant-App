const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var foodmenuSchema = new mongoose.Schema({
    foodmenuname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    foodcategory:{
        type:String,
       
      
    },
   foodingredient :{
        type:String,
      
       
    },
    salesprice:{
        type:String,
      
    },
    vat:
    {
        type:String,
      
    },
    description:
    {
        type:String,
        
    },
    vegitem:
    {
        type:String,
       
    },
    beverage:
    {
        type:String,
       
    },
    bar:
    {
        type:String,
       
    },
    photo:{
        type:String,
       
    }
    
});

//Export the model
module.exports = mongoose.model('Foodmenu', foodmenuSchema);