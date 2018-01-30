
/* GET art page */
module.exports.art = function(req, res){
  res.render('art', { title: 'Art' });
};
module.exports.elk = function(req, res){
  res.render('elk', { title: 'Elk' });
};
