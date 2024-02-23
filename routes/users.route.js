const express = require('express');
const router = express.Router(); 

const userController = require('../controllers/users.controller');
const { validateSearchQuery } = require('../middlewares/validators/users.validators');

router.get('/', userController.getAllUsers);
router.get('/search', validateSearchQuery, userController.searchUserByQuery);
router.get('/:uuid', userController.getUserByUuid);

module.exports = router;