let api = require('./api.js');
function getData(apiInfo = {}, params, successFunc = (() => {}), errorFunc = (() => {})) {
  let {
    path,
    type,
    contentType,
    showLoading
  } = apiInfo;

  if (showLoading) {
    wx.showLoading({
      title: '数据加载中',
      mask: true
    });
  }
  wx.request({
    url: path,
    data: params,
    header: {
      'content-type': contentType || 'application/x-www-form-urlencoded'
    },
    method: type || "GET", // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    success: function(res) {
      successFunc(res);
    },
    fail: function(res) {
      errorFunc(res);
    },
    complete: function(res) {
      // complete
      if (showLoading) {
        setTimeout(() => {
          wx.hideLoading();
        }, 300);
      }
    }
  })
}
module.exports = {
  request: getData
}