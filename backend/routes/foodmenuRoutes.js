const express =require('express');
const router =express.Router();

const {getfoodCategory,getingredients,getvat,creatFoodmenu} =require('../controller/foodmenuController');

router.get('/foodcategory',getfoodCategory);
router.get('/ingredients',getingredients);
router.get('/vat',getvat);
router.post('/creatfoodmenu',creatFoodmenu)



module.exports =router;