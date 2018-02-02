var mongoose= require('mongoose');
var Pie = mongoose.model('piece');

module.exports.all = function (req,res){
  Pie
   .find()
   .exec( function (err,piece) {
     if (!piece) {
    res.status(404), res.json({"message":"Piece not found"}); return;
     }
     else if (err){
    res.status(404), res.json(err); return;
  }
     res.status(200), res.json(piece);
   });
};
module.exports.single = function (req,res){
  if (req.params && req.params.pieceid) {
  Pie
   .findById(req.params.pieceid)
   .exec( function (err,piece) {
     if (!piece) {
    res.status(404), res.json({"message":"Piece not found"}); return;
     }
     else if (err){
    res.status(404), res.json(err); return;
  }
     res.status(200), res.json(piece);
   });
 } else {
   res.status(404), res.json({"message":"no id in request"});
 }
};
