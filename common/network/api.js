const baseUrl = 'https://demo.example.com';

const api = {
  // 获取用户信息
  getUserInfo: {
    path: baseUrl + '/api/wms/wx/token', //请求地址
    type: 'GET',  //请求方式
    showLoading: false,//是否需要显示loading
  },
}