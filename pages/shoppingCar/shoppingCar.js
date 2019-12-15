// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    selectAllStatus: true,
    checksbottom: true,
    "dataArr": [{
        selected: true,
        img: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.dpg.webp",
        information: " vivo Z3 6GB+64GB 极光蓝 骁龙710处理器 全面屏游戏智能手机 移动联通电信全网通4G手机",
        amount: 1,
        price: "2999",
      },
      {
        selected: true,
        img: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.dpg.webp",
        information: " vivo Z3 6GB+64GB 极光蓝 骁龙710处理器 全面屏游戏智能手机 移动联通电信全网通4G手机",
        amount: 1,
        price: "2999",
      }
    ]
  },
  onShow: function() {
    this.getTotalPrice();
  },
  // 统计总价
  getTotalPrice() {
    let dataArr = this.data.dataArr;
    let total = 0;
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].selected) {
        total += dataArr[i].amount * dataArr[i].price;
      }
    }
    this.setData({
      dataArr: dataArr,
      totalPrice: total.toFixed(2)
    });
  },
  // 选择事件
  selectList(event) {
    let index = event.currentTarget.dataset.index;
    let dataArr = this.data.dataArr;
    let selected = dataArr[index].selected;
    dataArr[index].selected = !dataArr[index].selected;
    this.setData({
      dataArr: dataArr
    });

    // 改变全选状态
    for (var i = 0; i < this.data.dataArr.length; i++) {
      // 当状态为全选时，每个元素其中有一个为false，则取消全选
      // 当状态为非全选时，每个元素都为true，则全选
      if (this.data.selectAllStatus) {
        if (!this.data.dataArr[i].selected) {
          this.setData({
            selectAllStatus: false
          });
          break;
        }
      } else {
        if (this.data.dataArr[i].selected) {
          this.setData({
            selectAllStatus: true
          });
        } else {
          this.setData({
            selectAllStatus: false
          });
          break;
        }
      }
    }
     // 从新计算总价
    this.getTotalPrice();
  },
  // 全选事件
  selectAllStatus() {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let dataArr = this.data.dataArr;
    // 改变所有商品状态
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      dataArr: dataArr
    })
    // 从新计算总价
    this.getTotalPrice();
  },
  // 减少商品数量
  reduceCount(e){
    let index = e.currentTarget.dataset.index;
    let dataArr = this.data.dataArr;
    let amount = dataArr[index].amount;
    if (amount>1){
      amount-=1;
      dataArr[index].amount = amount;
      this.setData({
        dataArr: dataArr
      })
    }
    // 从新计算总价
    this.getTotalPrice();
  } ,
  addCount(e) {
    let index = e.currentTarget.dataset.index;
    let dataArr = this.data.dataArr;
    let amount = dataArr[index].amount;
      amount += 1;
    dataArr[index].amount = amount;
    console.log(amount)
      this.setData({
        dataArr: dataArr
      })
    // 从新计算总价
    this.getTotalPrice();  
  },
  // 手动输入
  inputCount(e){
    console.log(e);
    let index = e.currentTarget.dataset.index;
    let dataArr = this.data.dataArr;
    let value=e.detail.value;
    let amount = dataArr[index].amount;
         dataArr[index].amount = value;
      this.setData({
        dataArr: dataArr
      });
   // 重新统计总价
      this.getTotalPrice();   
  },
// 失去焦点时判断数量是否小于1
  bindblur(e) {
    let index = e.currentTarget.dataset.index;
    let dataArr = this.data.dataArr;
    let num = e.detail.value;
    if (num < 1) {
      wx.showToast({
        title: '数量最少为1！',
        icon: 'none'
      })
      num = 1;
      dataArr[index].amount = num;
      this.setData({
        dataArr: dataArr
      });
      // 重新统计总价
      this.getTotalPrice();
    }
  },
  toOrder(e){
    let checksbottom = this.data.checksbottom;
    checksbottom = !checksbottom;
    this.setData({
      checksbottom: checksbottom
    });
    wx.navigateTo({
      url: '/pages/logs/logs?totalPrice='+this.data.totalPrice
  } ) 
   }  
})