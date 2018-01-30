var express = require('express');
var router = express.Router();
var ctrlArt = require('../controllers/art.js');
var ctrl = require('../controllers/Cs.js');
/* GET home page. */
router.get('/', ctrl.index);

router.get('/Art', ctrlArt.art);
router.get('/Art/Elk', ctrlArt.elk);
module.exports = router;
