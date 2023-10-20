const express =require('express');
const router =express.Router();

const {createUser,loginUserController,logout} =require('../controller/userController');

router.post('/register',createUser);
router.post('/login',loginUserController);
router.get('/logout',logout);

module.exports =router;