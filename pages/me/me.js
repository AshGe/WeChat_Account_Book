var App = getApp();
Page({

  onLoad: function (options) {
    this.setData({
      navH: App.globalData.navHeight,
    })
  },

  data: {
    menuitems: [
      { text: ' 当月预算', url: "../monthBudget/monthBudget", icon: '/pages/images/budget.png', tips: '', arrows: '/pages/images/next.png' },
      { text: ' 当月结余', url: '#', icon: '/pages/images/surplus.png', tips: '', arrows: '/pages/images/next.png' },
      { text: ' 主题设置', url: '#', icon: '/pages/images/theme.png', tips: '', arrows: '/pages/images/next.png' },
      { text: ' 意见反馈', url: '#', icon: '/pages/images/othermessage.png', tips: '', arrows: '/pages/images/next.png' }
    ]
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

  }

})