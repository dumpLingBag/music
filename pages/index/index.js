//index.js
//获取应用实例
const app = getApp();
const { $Toast } = require('../../dist/base/index');
const req = require('../../common/request');

Page({
  data: {
    background: [
      {
        'linkUrl':'11','img':'swiper-1.png'
      },
      {
        'linkUrl': '22', 'img': 'swiper-2.png'
      },
      {
        'linkUrl': '33', 'img': 'swiper-3.png'
      }
      ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  onLoad: function () {
    
  },
  bindinput: function(e) {
    
  },
  bindfocus: function(e) {
    
  },
  search: function(e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
