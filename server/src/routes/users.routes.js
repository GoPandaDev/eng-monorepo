const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/users.contoller');

router.get('/', getUsers);

module.exports = router;
