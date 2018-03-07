var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (true) {
  apiOptions.server = "https://colinxenofish.herokuapp.com";
}
/* GET art page */
/*module.exports.art = function(req, res){
  var requestOptions, path;
  path = "/api/pieces";
   requestOptions= {
     url: apiOptions.server+path,
     method: "GET",
     json:{},
     qs:{}
   };
   request(
     requestOptions,
     function(err,response,body){
       renderArtList(req,res,body);
     });
};
var renderArtList = function (req,res,responseBody){
res.render('art', { title: 'Art', art: responseBody});
};*/
module.exports.art = function(req, res){
res.render('art', { title: 'Art'});
}
/*
var getPieceInfo = function (req, res, callback) {
  var requestOptions, path;
  path = "/api/pieces/" + req.params.pieceid;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      if (response.statusCode === 200) {
        callback(req, res, data);
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
};

var renderDetailPage = function (req, res, info) {
res.render('pieceInfo', { title:"Piece Info", id:req.params.pieceid});
};

module.exports.pieceInfo = function(req, res){
  getPieceInfo(req, res, function(req, res, responseData) {
    renderDetailPage(req, res, responseData);
  });
};
*/
module.exports.pieceInfo = function(req, res){
res.render('pieceInfo', { title:"Piece Info", id:req.params.pieceid});
  };
