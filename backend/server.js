const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5500;
// connexion a la basse de donnée
connectDB();
// utilisation des middleware pour traitement des requetes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require("./routes/post.routes"));
// lancer le serveur
app.listen(port, () => console.log("le serveur a demarré au port " + port));
