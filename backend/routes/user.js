const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const checkUsers = require('../middleware/checkConnections');

router.post('/signup', checkUsers, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;