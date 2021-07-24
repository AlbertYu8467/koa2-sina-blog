
const {Blog, User} = require('./model')

!(async function(){
  //查询一个用户
  // const zhangsan = await User.findOne({
  //   where:{
  //     userName: 'zhangsan'
  //   }
  // }) 

  // 查询特定列
  // const zhangsanName = await User.findOne({
  //   attributes:['userName','nickName'],
  //   where:{
  //     userName: 'zhangsan'
  //   },
  // }) 
  // console.log(zhangsanName.dataValues)

  // 查询列表
  // const zhangsanBlogList = await Blog.findAll({
  //   where:{
  //     userId: 1 
  //   },
  //   order:[
  //     ['id', 'desc']
  //   ]
  // })
  // console.log(zhangsanBlogList.map(blog => blog.dataValues))

  // 分页
  // const blogList = await Blog.findAll({
  //   limit:2, //限制查询
  //   offset:2, //跳过多少条
  //   order:[
  //     ['id', 'desc']
  //   ]
  // })
  // console.log(blogList.map(blog => blog.dataValues))

  // 总数 和 分页
  // const blogListAndCount  = await Blog.findAndCountAll({
  //   limit:2, //限制查询
  //   offset:0, //跳过多少条
  //   order:[
  //     ['id', 'desc']
  //   ]
  // })
  // console.log(
  //   blogListAndCount.count,
  //   blogListAndCount.rows.map(blog => blog.dataValues))

  // 连表查询1
  // const blogListWithUser = await Blog.findAndCountAll({
  //   order:[
  //     ['id', 'desc']
  //   ],
  //   include:[
  //     {
  //       model: User,
  //       attributes:['userName','nickName'],
  //       where:{
  //         userName:'zhangsan'
  //       }
  //     }
  //   ]
  // })
  // console.log(
  //   blogListWithUser.count,
  //   blogListWithUser.rows.map(blog => {
  //      const blogVal = blog.dataValues;
  //      blogVal.user = blogVal.user.dataValues;
  //      return blogVal
  //   }))

    // 连表查询2
    const userListWithBlog = await User.findAndCountAll({
      attributes:['userName','nickName'],
      include:[
        {
          model: Blog,
        }
      ]
    })
    console.log(
      userListWithBlog.count,
      userListWithBlog.rows.map(user => {
         const userVal = user.dataValues;// 一个用户有多个博客
         userVal.blogs = userVal.blogs.map(blog => blog.dataValues);
         return userVal
      }))
})()