// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '1',
    tabs: [{
        key: '1',
        title: '全部',
        content: 'Content of tab 1',
      },
      {
        key: '2',
        title: '商家招聘',
        content: 'Content of tab 2',
      },
      {
        key: '3',
        title: '个人求职',
        content: 'Content of tab 3',
      },
      {
        key: '4',
        title: '个人求职',
        content: 'Content of tab 3',
      },
      {
        key: '5',
        title: '个人求职',
        content: 'Content of tab 3',
      },
      {
        key: '6',
        title: '个人求职',
        content: 'Content of tab 3',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onTabsChange(e) {
    console.log('onTabsChange', e)
    const {
      key
    } = e.detail
    const index = this.data.tabs.map((n) => n.key).indexOf(key)

    this.setData({
      key,
      index,
    })
  },
})