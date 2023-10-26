const express =require('express');
const router =express.Router();

const {getposCategory,getPosWaiter,getCustomer,getTable,getposFooditems} =require('../controller/posController');


router.get('/poscategory',getposCategory);
router.get('/posWaiter',getPosWaiter);
router.get('/posCustomer',getCustomer);
router.get('/posTable',getTable);
router.get('/posfood',getposFooditems)



module.exports =router;