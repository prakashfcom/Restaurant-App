const express =require('express');
const router =express.Router();

const {getfoodCategory,getingredients,getvat,creatFoodmenu,getallfoods} =require('../controller/foodmenuController');

router.get('/foodcategory',getfoodCategory);
router.get('/ingredients',getingredients);
router.get('/vat',getvat);
router.post('/creatfoodmenu',creatFoodmenu),
router.get('/getallfoodmenu',getallfoods)



module.exports =router;