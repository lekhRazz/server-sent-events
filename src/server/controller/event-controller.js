
const sse = require("../sse");

const createPostController = async (req, res) => {
  const body = req.body;
  sse.send(body, "post");
  return res.status(200).json({
    status: 200,
    message: 'post created'
  })
};


module.exports = {
  createPostController,
};
