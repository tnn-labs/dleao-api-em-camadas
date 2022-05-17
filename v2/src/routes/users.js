const express = require('express');

const router = express.Router();

const { createUserController } = require('../controllers/users/createUserController');

router.post('/', createUserController);

module.exports = router;