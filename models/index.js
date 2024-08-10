const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasOne(User, {
    foreignKey: 'post_user',
    onDelete: 'CASCADE',
});

User.hasMany(Post, {
    foreignKey: 'post_user',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User);
Post.belongsTo(User);

module.exports = { User, Post, Comment };
