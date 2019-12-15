// pages/day01/day01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  clickad(options) {
    wx.navigateTo({
      url: '../ad-1/ad-1'
    })
  },
  search_turn() {
    wx.navigateTo({
      url: '../research/research'
    })
  },



  // 数据库传值
  req() {
    let that = this;
    wx.request({
      url: 'http://localhost:8456/8456',
      data: '',
      header: {
        "content-type": "application/json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          lunbo_pictures: res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  req_a() {
    let that = this;
    wx.request({
      url: 'http://localhost:8456/8458',
      data: '',
      header: {
        "content-type": "application/json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        // console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          // console.log(res.data[i]);
          if (i < 10) {
            arr1.push(res.data[i]);
          } else {
            arr2.push(res.data[i]);
          }
        }
        // console.log(arr1);
        // console.log(arr2);
        arr3.push(arr1, arr2);
        // console.log(arr3);

        that.setData({
          Icons_1: arr1,
          Icons_2: arr2,
          Icons_3: arr3
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  req_purple() {
    let that = this;
    wx.request({
      url: 'http://localhost:8456/8459',
      data: '',
      header: {
        "content-type": "application/json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({
          PurplePictures: res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  req_JDhappy() {
    let that = this;
    wx.request({
      url: 'http://localhost:8456/jdHappy',
      data: '',
      header: {
        "content-type": "application/json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // console.log(res.data);
        let arr1 = [
          [],
          [
            [],
            [],
            [],
            []
          ]
        ]
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].H_id == 1) {
            arr1[0].push(res.data[i])
          } else if (res.data[i].H_id == 21) {
            arr1[1][0].push(res.data[i])
          } else if (res.data[i].H_id == 22) {
            arr1[1][1].push(res.data[i])
          } else if (res.data[i].H_id == 23) {
            arr1[1][2].push(res.data[i])
          } else if (res.data[i].H_id == 24) {
            arr1[1][3].push(res.data[i])
          }
        }
        console.log(arr1);

        that.setData({
          JDHappy_title: arr1[0],
          JDHappy_content: arr1[1]
        })
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
    this.req_a();
    this.req_purple();
    this.req_JDhappy();
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