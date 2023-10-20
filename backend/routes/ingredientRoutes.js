const express =require('express');
const router =express.Router();

const {createIngredient,getCategory,getingredientUnit} =require('../controller/ingredientController');


router.post('/createingredient',createIngredient);
router.get('/getallcategory',getCategory);
router.get('/getingunit',getingredientUnit);

//router.get('/allingunit',getallIngunit);


module.exports =router;