const express = require("express");
const postController = require("../controllers/post");

// we require express to use express.Router
const router = express.Router();

router.get('/', postController.getPosts);
router.post('/post', postController.createPost);


module.exports = router;
