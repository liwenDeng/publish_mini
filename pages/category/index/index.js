//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active : 0,
    countryList: ['中国', '美国', '英国', '日本', '韩国', '巴西', '德国'],
    region:["四川省","成都市","高新区"],
    cates:[
      {
        "id":1,
        "name":"租房",
        "icon":"images/ic_menu_me_pressed.png"
      },
      {
        "id": 2,
        "name": "旅游",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 3,
        "name": "教育",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 4,
        "name": "母婴",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 5,
        "name": "软件硬件",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 6,
        "name": "跑腿",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 7,
        "name": "餐饮",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 8,
        "name": "二手书籍",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 9,
        "name": "租房",
        "icon": "images/ic_menu_me_pressed.png"
      },
      {
        "id": 9,
        "name": "租房",
        "icon": "images/ic_menu_me_pressed.png"
      }
    ],
    noticeList:[
      {
        "id":1,
        "title":"2018.11.1 停机维护"
      },
      {
        "id": 2,
        "title": "新产品推出"
      },
      {
        "id": 3,
        "title": "快讯与腾讯达成战略合作"
      }
    ],
    "test":12
  },
  changeRegion: function(e) {
    this.setData({region : e.detail.value})
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  switch1Change: function(e) {
    console.log(e.detail.value)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
