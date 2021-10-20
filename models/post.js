const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title:{
    type:String,
    requred:"Title is requred", minlength: 4, maxlength:100
  },
  body:{
    type:String,
    required:"Body is required",
    minlength:4,
    maxlength:2000
  }
});

module.exports = postSchema;
