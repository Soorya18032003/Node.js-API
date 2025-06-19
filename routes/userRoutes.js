const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// http://localhost:3000/api commom for all the urls........
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.get('/users/:name/:email', userController.createUser);//To push the data of the user i was not able to do it so i make to get through the urls only, I tried my best .
router.get('/usersUp/:id/:name/:email', userController.updateUser);//Same as to Update user and Delete user as well. To Update you must First off all give the common url with its ID and to change the Name Or Email. 
router.get('/usersDel/:id', userController.deleteUser);//You can delete by just Giving the id...

module.exports = router;