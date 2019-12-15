
//
Page({
  data: {
    totalPrice: 0,
    index:1,
    array: ['支付宝', '微信支付', '其他'],
    region: ['四川省', '成都市', '武侯区'],
    customItem: '全部',
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      totalPrice: options.totalPrice
    })
  },
  // 选择地区
  bindRegionChange (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
// 取消事件
  bindCancel() {
    wx.redirectTo({
      url: "/pages/shoppingCar/shoppingCar",
    })
  },
  bindEnter(){
    wx.showModal({
      title: '温馨提示',
      content: '是否确认付款 ？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  }
})
