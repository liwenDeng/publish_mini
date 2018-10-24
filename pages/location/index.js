// pages/location/index.js
import util from "../../utils/util.js"
//省市区数据源 https://github.com/youzan/vant/blob/dev/packages/area/demo/area.js
import arealist from "../../utils/area.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: "",
    city: "",
    county: "",
    location: "",
    show: false,
    areaList: arealist
  },

  onAreaPickerShow: function() {
    this.setData({
      show: true
    });
  },
  onClose: function() {
    this.setData({
      show: false
    });
  },
  onConfirmPicker: function(res) {
    var area = res.detail.detail;
    console.log(area);
    this.setData({
      province: area.province,
      city: area.city,
      county: area.county,
      show: false
    });
  },
  onCancle: function() {
    this.setData({
      show: false
    });
  },
  onSubmit: function() {

    let area = {
      province: this.data.province,
      city: this.data.city,
      county: this.data.county
    };
    wx.setStorage({
      key: 'area',
      data: area,
    })
    console.log('提交定位信息', area);
    wx.navigateBack({
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    util.getLocation((res) => {
      that.setData({
        province: res.province,
        city: res.city,
        county: res.district,
        location: res.province + res.city + res.district + res.street_number
      })
    })
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

  }
})