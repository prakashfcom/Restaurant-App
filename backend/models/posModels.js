const mongoose = require('mongoose'); // Erase if already required
const validObjectId = new mongoose.Types.ObjectId();
// Declare the Schema of the Mongo model
var posSchema = new mongoose.Schema({
ordernumber:{type:String},
  customers: {
    type: mongoose.Schema.ObjectId,
       ref: "Customer",
   },
  options:{type:String},

  // cart: {
  //   type: Array,
  //   default: [],
  // },
  cart:[{
    foodmenuId: { type: mongoose.Schema.ObjectId,
      ref: "FoodMenu",},
    salesprice: String,
    quantity: String,

  }] 
    
  ,
  total:{type:String},
  grandTotal:{type:String},
  vatAmount:{type:String},
  tableId:{
    type: mongoose.Schema.ObjectId,
       ref: "Table",
       default: null,
  },
  waiterId:{
    type: mongoose.Schema.ObjectId,
       ref: "Waiter",
  },




},{ timestamps: true });

//Export the model
module.exports = mongoose.model('Pos', posSchema);