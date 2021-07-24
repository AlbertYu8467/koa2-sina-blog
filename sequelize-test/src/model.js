const Sequelize = require('sequelize')
const seq = require('./seq')

// 创建User模型，表名users
const User = seq.define('user',{
  // id 会自动创建，并设为主键、自增
  userName:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickName:{
    type: Sequelize.STRING,
    comment:'昵称'
  },
  // createAt updateAt自动创建
});

// 创建Blog模型，表名blog
const Blog = seq.define('blog', {
  title:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})
 
// 外键关联：方式1 先blog
Blog.belongsTo(User,{
  //创建外键userId > user.id
  foreignKey: 'userId'
})

// 外键关联:方式2  先user
User.hasMany(Blog,{
  //创建外键userId > user.id
  foreignKey: 'userId'
})
// Blog.belongsTo(User) 简单粗暴





module.exports = {
  User,
  Blog
}

