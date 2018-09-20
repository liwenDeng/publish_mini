// pages/publish/detail.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics: [],
    linkman: "",
    location:'',
    areaIndex: 0,
    areaOptions:[
      {
        id: 0,
        name: '本地'
      },
      {
        id: 1,
        name: '全国'
      }
    ],
    area:'本地',
    price:0.1,
    isTop: false,//是否置顶
    topDetail:"",
    agree: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 位置信息
    util.getLocation((res) => {
      that.setData({
        location: res
      })
    });
    // 用户名- getUserInfo不可用,如需用户名，需要强制获取用户信息授权
    // wx.getUserInfo({
    //   success: function(res){
    //     var userInfo = res.userInfo
    //     var nickName = userInfo.nickName
    //     that.setData({
    //       linkman: nickName
    //     })
    //   }
    // })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  deletePic: function(e) {
    var picIndex = e.currentTarget.dataset.picindex;
    var pics = this.data.pics
    console.log('删除第',e)
    pics.splice(picIndex,1)
    this.setData({
      pics
    })
  },
  onAddPic: function(e) {
    console.log('添加图片')
    var pics = this.data.pics
    var that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(res);
        pics = pics.concat(tempFilePaths);
        that.setData({
          pics
        })
      }
    })
  },
  // 点击定位
  onClickLocation: function(){
    console.log('选择地址');
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          location: res.address
        })
      }
    })
  },
  onAreaPickerChange: function(e) {
    console.log('选择发布地区，携带值为', e.detail.value)
    this.setData({
      areaIndex: e.detail.value
    })
  },
  onTopChange: function(e) {
    var that = this;
    this.setData({ isTop: e.detail });
    if (this.data.isTop) {
      //tost
      var titles = [
        "置顶一天（收费" + this.data.price + '元)',
        "置顶一周（收费" + this.data.price + '元)',
        "置顶一月（收费" + this.data.price + '元)',
      ]
      wx.showActionSheet({
        itemList: titles,
        success(res) {
          console.log('成功', res)
          that.setData({ topDetail: titles[res.tapIndex]})
        },
        fail(res){
          console.log('取消',res)
          that.setData({ isTop: false });
        },
      })
    }
  },
  onAgreeChange: function(e) {
    console.log('check');
    this.setData({
      agree: !this.data.agree
    })
  },
  onInstructionsClick: function(e) {
    console.log('须知');
  },
  formSubmit: function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
})