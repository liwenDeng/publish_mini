const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatPrice = price => {
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
   * */
  function number_format(number, decimals, dec_point, thousands_sep, roundtag) {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || "ceil"; //"ceil","floor","round"
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        console.log();
        return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
      };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
  return number_format(price, 2, ".")
}

// 获取定位信息
// 文档 https://lbs.qq.com/qqmap_wx_jssdk/method-reverseGeocoder.html
const getLocation = (result = (() => {})) => {
  //获取授权
  wx.authorize({
    scope: 'scope.userLocation',
    success: function(res) {
      var QQMapWX = require('../common/qqmap-wx-jssdk/qqmap-wx-jssdk.js');
      let mapAppKey = "DT7BZ-VMS3S-FABOA-6J453-AIWC5-SOBF4"; //腾讯地图key
      // 实例化API核心类
      var map = new QQMapWX({
        key: mapAppKey // 必填
      });
      // 调用接口
      wx.getLocation({
        success: function(res) {
          map.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function(res) {
              result(res.result.address)
            },
            fail: function(res) {
              result("")
            }
          });
        },
        fail: function(res) {
          result("")
        }
      })
    },
    fail: function(res) {
      // TODO: 兼容未授权情况 
      // https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html
      result("")
    }
  })
}

module.exports = {
  formatTime: formatTime,
  formatPrice: formatPrice,
  getLocation: getLocation
}