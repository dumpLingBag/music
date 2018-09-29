// pages/account/account.js
const app = getApp();
const { $Toast } = require('../../dist/base/index');
const isLogin = require('../../common/login.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    visible3: false,
    actions3: [
      {
        name: '确定'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.checkSession({
      success: function (res) {
        // 已登陆
        console.log(res);
      },
      fail: function (res) {
        // 未登陆
        isLogin.isLogin();
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getUserInfo: function (e) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              })
            }
          })
        }
      },
      complete: res => {
        if (!res.authSetting['scope.userInfo']) {
          this.setData({
            visible3: true,
            text3: '由于你拒绝了授权，你将看不到你帅气的头像，以及最优的体验'
          })
        }
      }
    })
  },

  sign: function (e) {
    $Toast({
      content: wx.getStorageSync('3rdSessionId')
    })
  },

  handleClick3: function (e) {
    this.setData({
      visible3: false
    })
  },

  lvLogin: function (e) {
    app.authSetting.getUserInfo = null;
  },
  
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })
    
  }

})