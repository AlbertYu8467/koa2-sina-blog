const Sequelize = require('sequelize')
const conf = {
  host:'localhost',
  dialect:'mysql'
}
const seq = new Sequelize('koa2_weibo_db','root','yuhu2020',conf)

// 测试连接
// seq.authenticate().then(res =>{
//   console.log('ok')
// })

module.exports = seq;
