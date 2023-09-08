const express = require('express');
const router  = express.Router();
const routerUser = require('./userRouter');

router.use('/user',routerUser);

module.exports = router;


