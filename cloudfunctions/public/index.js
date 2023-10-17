// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
  // 中转小程序 云环境ID
  env: '请输入', // <!-- replace -->
  traceUser: true,
});

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  switch (event.action) {
    case 'getUrlScheme': {
      return getJumpPage(event)
    }
  }

  return 'action not found'
}

async function getJumpPage(event) {
  return cloud.openapi.urlscheme.generate({
    jumpWxa: {
      path: event?.path || '',
      query: event?.query  || '',
    },
    // 如果想不过期则置为 false，并可以存到数据库
    isExpire: false,
    // 一分钟有效期
    expireTime: parseInt(Date.now() / 1000 + 60 * 60 * 12 * 30),
  })
}