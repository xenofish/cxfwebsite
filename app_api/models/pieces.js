var mongoose = require ('mongoose');
var pieceSchema = new mongoose.Schema({
  year: Number,
  title: String,
  medium: String,
  location: String,
  status: String,
  description: String,
  images: [{
    location: String,
    alt: String
  }]
});
mongoose.model('piece',pieceSchema);
