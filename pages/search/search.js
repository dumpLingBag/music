// pages/search/search.js
const { $Message } = require('../../dist/base/index');
const { $Toast } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible2: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  bindconfirm: function(e) {
    var val = e.detail.value;
    console.log(val)
    if (val == undefined || val == '') {
      $Toast({
        content: '请先输入内容'
      });
    } else {
      var oldHistory = wx.getStorageSync('history');
      if (oldHistory == undefined || oldHistory == '') {
        var history = [];
        history.push(val)
        wx.setStorageSync('history', history)
      } else {
        oldHistory.unshift(val)
        wx.setStorageSync('history', oldHistory)
      }
    }
  },
  trash: function() {
    this.setData({
      visible2: true
    })
  },
  handleCloseOk: function() {
    this.setData({
      visible2: false
    })
    wx.removeStorageSync('history')
  },
  handleCloseCl: function() {
    this.setData({
      visible2: false
    })
    var oldHistory = wx.getStorageSync('history')
  }
})