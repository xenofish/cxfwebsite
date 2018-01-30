
/* GET art page */
module.exports.art = function(req, res){
  res.render('Art', { title: 'Art' });
};
module.exports.elk = function(req, res){
  res.render('Elk', { title: 'Elk' });
};
