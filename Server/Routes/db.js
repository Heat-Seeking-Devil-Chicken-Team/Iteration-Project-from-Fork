const express = require('express');
const router = express.Router();
const testController = require('../Controllers/testController');
const dbController = require('../Controllers/dbController.js');
const userController = require('../Controllers/userController.js');

//query database for product information
router.post('/:quote', dbController.getInfo, (req, res) => {
  return res.status(200).json(res.locals.priceTag);
})


// /db/qoute
router.get('/', testController.getItem, (req, res) => {
  return res.status(200).json(res.locals.people);
});


// db/create User + hash password
router.get('/login', userController.createUser, userController.makeUser, (req, res) => {
  return res.status(200).json(res.locals.data);
} )
module.exports = router;
