const {Blog, User} = require('./model')

!(async function(){
  // const delRes = await Blog.destroy({
  //   where:{
  //     id:4
  //   }
  // })
  // console.log(delRes, delRes > 0)

  //删除用户 
  // 级联删除 要设置外键 cascade
    const delUserRes = await User.destroy({
    where:{
      id:1
    }
  })
  console.log(delUserRes, delUserRes > 0)
})()