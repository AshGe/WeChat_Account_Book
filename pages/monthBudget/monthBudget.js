var App = getApp();
Page({
  onLoad: function (options) {
    this.setData({
      navH: App.globalData.navHeight,
    })
  },
  imageError: function (e) {
    console.log('image发生error事件，携带值为', e.detail.errMsg)
  }
})