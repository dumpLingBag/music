const app = getApp();
const network = require('../common/request');

function login () {
  // 登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      network.request(
        'http://rngay.cross.echosite.cn/wxLogin',
        {code: res.code},
        'GET'
      ).then((res) => {
        console.log(res);
        if (res.data.sessionId != undefined && res.data.sessionId != '') {
          wx.setStorageSync('3rdSessionId', res.data.sessionId)
        }
      })
    }
  })
}

module.exports = {
  login: login
}