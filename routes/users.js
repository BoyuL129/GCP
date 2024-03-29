var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.getAllUsers);

/* Create one user */
router.post('/', userController.addUser);

/* GET one user */
router.get('/:id',userController.getUser);

/* Update one user */
router.put('/:id', userController.updateUser);

/* GET one user */
router.delete('/:id',userController.deleteUser);

module.exports = router;
