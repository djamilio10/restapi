const PostModel = require("../models/User");
// creation d'une fonction pour get post
module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};
// creation de fonction pour cration de message
module.exports.setPosts = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ name: "erreur merci d'ajoute un message" });
  }
  const post = await PostModel.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  res.status(200).json(post);
};
// pour editer un post
module.exports.editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const updatedData = req.body;

    // Vérifiez si le post existe
    const existingPost = await PostModel.findById(postId);
    if (!existingPost) {
      return res.status(400).json({ message: "Ce post n'existe pas" });
    }

    // Mise à jour du post
    const updatedPost = await PostModel.findByIdAndUpdate(postId, updatedData, {
      new: true,
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du post", error });
  }
};
//creation de deletePost pour supprimer un user
module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json("nexiste pas");
  }
  await post.deleteOne();
  res.status(200).json("Message suprimé" + req.params.id);
};
