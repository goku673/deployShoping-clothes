const express = require('express');
const routerUser = express.Router();
const {getAllusers,postUser} = require('../handlers/user');


routerUser.get('/mgDB',getAllusers);
routerUser.post('/mgDB',postUser)

module.exports = routerUser;