// pages/Load/Load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  login: function(e){
    let username = e.detail.value;
    let that = this;
    wx.request({
      url: 'http://localhost:8456/XYC',
      data: {
        id: ""
      },
      header: {
        "Content-type": "application/json"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        for(let i=0;i<5;i++){
          if (username == res.data[i].name) {
            console.log('right')
            wx.navigateTo({ url: '../Mysort/Mysort?name='+res.data[i].name, })
          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let that = this;
    // wx.request({
    //   url: 'http://localhost:8888/popCollection',
    //   data: {
    //     id: ""
    //   },
    //   header: {
    //     "Content-type": "application/json"
    //   },
    //   method: 'POST',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function (res) {
    //     that.setData({
    //       message: res.data
    //     })
    //     console.log(res.data)
    //   }
    // })
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