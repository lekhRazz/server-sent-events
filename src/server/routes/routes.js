const {
  createPostController,
} = require("../controller/event-controller");
const express = require("express");
const router = express.Router();


const sse = require('../sse');


router.get("/stream", sse.init);

router.post("/posts", createPostController);


module.exports = router;
