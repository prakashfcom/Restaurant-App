const express =require('express');
const router =express.Router();

const {getposCategory,getPosWaiter,getCustomer,getTable,getposFooditems,insertPos,getAllPos,runningOrder} =require('../controller/posController');


router.get('/poscategory',getposCategory);
router.get('/posWaiter',getPosWaiter);
router.get('/posCustomer',getCustomer);
router.get('/posTable',getTable);
router.get('/posfood',getposFooditems);
router.post('/createpos',insertPos);
router.get('/getPos',getAllPos);
router.get('/getrunningorder',runningOrder);



module.exports =router;