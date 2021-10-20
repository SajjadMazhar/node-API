const Post = require("../models/post");

exports.getPosts =  (req, res)=>{
    const posts = Post.find().select("_id title body")
    .then( posts => {
      res.json({posts});
    }).catch((err)=>{
      console.log(err);
    })
}

exports.createPost = (req, res)=>{
  const post = new Post(req.body);
  // console.log("creating post: ", post);
  // post.save((err, result)=>{
    
  //   return res.status(200).json({
  //     post:result
  //   });
  // })
  post.save().then(result=>{
    res.json({
      post: result
    })
  })
}
