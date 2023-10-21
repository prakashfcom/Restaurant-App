const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var foodmenuSchema = new mongoose.Schema({
    foodmenuname:{
        type:String,
        required:true,
        index:true,
unique:true,
sparse:true
       
    },
    foodcategory:[],
   foodingredient :[],
    salesprice:{
        type:String,
      
    },
    vat:[],
    description:
    {
        type:String,
        
    },
    vegitem:[],
    beverage:[],
    bar:[],
    photo:{
        type:String,
       
    }
    
});

//Export the model
module.exports = mongoose.model('Foodmenu', foodmenuSchema);