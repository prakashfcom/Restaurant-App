const express =require('express');
const router =express.Router();

const {getposCategory} =require('../controller/posController');


router.get('/poscategory',getposCategory);



module.exports =router;