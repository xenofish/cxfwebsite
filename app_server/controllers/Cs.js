/* GET home page */
module.exports.index = function(req, res){
  res.render('index', { title: 'Colin Xeno Fish' });
};
module.exports.vectors = function(req, res){
res.render('vectors', { title:"Vectors" });
};
module.exports.aboutVectors = function(req, res){
res.render('aboutVectors', { title:"About Vectors" });
};
