const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', function (ctx, next) {
  const {username, password} = ctx.request.body;
  let userInfo
  if(username === 'zhangsan' && password === 'abc'){
    userInfo = {
      userId:1,
      username:'zhangsan',
      password:'abc',
      nickname:'张三',
      gender:1
    }
  }

  //加密
  let token;
  if(userInfo){
    token = jwt.sign(userInfo,'UIsdf_7878#$',{expiresIn:'1h'})
  }
  if(!userInfo){
    ctx.body ={
      errno:-1,
      msg:'登录失败'
    }
    return
  }
  ctx.body ={
    errno:0,
    data:token
  }
})

router.get('/userInfo', async function (ctx, next) {
  const token = ctx.header.authorization;
  try {
    const payload = await verify(token.split(' ')[1], 'UIsdf_7878#$');
    ctx.body ={
      errno:0,
      data:payload
    }
  }catch(e){
    ctx.body ={
      errno:1,
    }
  }

})

module.exports = router
