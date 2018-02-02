var express = require('express');
var router = express.Router();
var ctrlArt = require('../controllers/Art');
var ctrl = require('../controllers/Cs');
/* GET home page. */
router.get('/', ctrl.index);
router.get('/Art', ctrlArt.art);
router.get('/Art/:pieceid', ctrlArt.pieceInfo);
module.exports = router;
