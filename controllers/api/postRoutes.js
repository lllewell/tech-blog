const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        post_user: req.body.post_user,
      });
      // ? if the dish is successfully created, the new response will be returned as json
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;