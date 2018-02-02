var express = require ('express');
var router = express.Router();
var ctrlPieces = require('../controllers/artpieces.js');

router.get('/pieces', ctrlPieces.all);
router.get('/pieces/:pieceid',ctrlPieces.single);

module.exports = router;
