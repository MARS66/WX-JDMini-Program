// pages/recommend/recommend.js
let navBar = ['精选', '鞋包', '女装', '家具', '超市', '美妆', '母婴', '男装', '手机', '电脑', '数码', '家电', '种草'];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBar: navBar,
    id: 0,
    down: 'block',
    up: 'none',
    i:-1,
    route:'sergd'
  },
  selectedItem(event) {
    this.setData({
      id: event.currentTarget.dataset.index
    });
    if(this.data.id==1){
      this.setData({
        route: 'serss'
      });
    }
    if (this.data.id == 0) {
      this.setData({
        route: 'sergd'
      });
    }
    this.req();
  },
  selectedItem_s(event) {
    this.setData({
      i: event.currentTarget.dataset.index
    });
  },
  onClick_down() {
    this.setData({
      down: 'none',
      up: 'block'
    });
  },
  onClick_up() {
    this.setData({
      down: 'block',
      up: 'none'
    });
  },
  req(){
    let that = this;
    wx.request({
      url: `http://localhost:8456/${that.data.route}`,
      data: '',
      header: { "content-type": "application/json"},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({
          data:res.data
        });
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.req();
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