const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'post_user'
})

Post.belongsTo(User, {
    foreignKey: 'post_user'
})

module.exports = { User, Post, Comment };
