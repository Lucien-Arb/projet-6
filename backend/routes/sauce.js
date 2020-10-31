const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const likes = require('../middleware/likes'); 
const checkForm = require('../middleware/checkSauce');
const sauceCtrl = require('../controllers/sauce');

router.post('/', auth, multer, checkForm, sauceCtrl.createSauce);
router.post('/:id/like', auth, likes, sauceCtrl.likeOneSauce);
router.put('/:id', auth, multer, checkForm, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);

module.exports = router;