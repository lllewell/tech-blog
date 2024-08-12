const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment}]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll();

    const comments = commentData.map((comment) => comment.get({ plain: true }));


    res.render('homepage', {
      comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
