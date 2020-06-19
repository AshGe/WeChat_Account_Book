var App=getApp();
Page({
  onLoad: function (options) {
    this.setData({
      navH: App.globalData.navHeight
    })
  },

  data: {
    date: '2020-01-01',
    customItem: '全部'
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

})