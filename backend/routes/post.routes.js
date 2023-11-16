const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
} = require("../controllers/post.controllers");
const router = express.Router();
//routes pour acceder a l'url  get
router.get("/", getPosts);
//routes pour acceder a l'url  post
router.post("/", setPosts);
// mettre a jour les donnée avec id
router.put("/:id", editPost);

// route pout supprimer un message avec id
router.delete("/:id", deletePost);
module.exports = router;
