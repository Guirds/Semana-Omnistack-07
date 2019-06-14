const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://omnistack:123@cluster0-0tnto.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  next();
});

// Para que todos endereços/URLS consigam acessar esse back-end
app.use(cors());

// Para acessar serviços estaticos(imgs que foram baixadas)
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "upload", "resized"))
);

// Declara as rotas das aplicação
app.use(require("./routes"));

app.listen(3333);
