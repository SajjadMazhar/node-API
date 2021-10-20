const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title:{
    type:String,
    requred:true
  },
  body:{
    type:String,
    required:true,
  }
});

const Post = mongoose.model('post', postSchema)

module.exports = Post;
