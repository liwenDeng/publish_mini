// common/component/cell/cell.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    // 这里是一个自定义方法
    onPhoneCall: function() {
      var eventDetail = {} // detail对象，提供给事件监听函数
      var eventOption = {} // 触发事件的选项
      this.triggerEvent('phoneCall', eventDetail, eventOption);
    }
  }
})