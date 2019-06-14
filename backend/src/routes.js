const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);

// Rota para realizar likes
routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;

// Multer permite que o express entenda o body(corpo) que a gente envia no formato multipart form data. QUe são arquivos de texto/campos e arquivos como img
