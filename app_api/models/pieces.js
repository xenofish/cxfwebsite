var mongoose = require ('mongoose');
var pieceSchema = new mongoose.Schema({
  year: Number,
  title: String,
  medium: String,
  location: String,
  status: String,
  description: String,
  imagetitle: String,
  images: [{
    location: String,
    alt: String
  }],
  videos: [{
    location: String
  }]
});
mongoose.model('piece',pieceSchema);
