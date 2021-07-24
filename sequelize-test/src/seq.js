const Sequelize = require('sequelize')
const conf = {
  host:'localhost',
  dialect:'mysql'
}

// 线上环境使用连接池
// conf.pool = {
//   max: 5, //连接池最大的数量
//   min:1,
//   idle:10000 //一个连接池10s中没有使用，释放
// }
const seq = new Sequelize('koa2_weibo_db','root','yuhu2020',conf)

// 测试连接
// seq.authenticate().then(res =>{
//   console.log('ok')
// })

module.exports = seq;
