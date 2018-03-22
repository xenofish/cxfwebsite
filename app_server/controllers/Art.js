var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (true) {
  apiOptions.server = "https://colinxenofish.herokuapp.com";
}
module.exports.art = function(req, res){
res.render('art', { title: 'Art'});
}
module.exports.pieceInfo = function(req, res){
res.render('pieceInfo', { title:"Piece Info", id:req.params.pieceid});
  };
