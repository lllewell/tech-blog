const router = require('express').Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');


router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create({
        comment: req.body.comment,
        user: req.body.user,
      });
      // ? if the dish is successfully created, the new response will be returned as json
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;