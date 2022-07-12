const express = require("express");
const cors = require("cors");
const moduleLoginFunction = require("./login");
const moduleTodosFunction = require("./todos");
const server = express();
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

moduleLoginFunction(server);
moduleTodosFunction(server);

server.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});