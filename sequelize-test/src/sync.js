const seq = require('./seq')

require('./model')

// 测试连接
seq.authenticate().then(res =>{
  console.log('auth ok')
})

// 测试同步
seq.sync({
  force: true
}).then(res => {
  console.log('sync ok')
  process.exit()
})