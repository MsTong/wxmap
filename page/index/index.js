// page/index/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    top: (app.globalData.globalHeight - 40) / 2 - 33 + 'px',
    left: app.globalData.globalWidth / 2 - 12 + 'px',
    longitude:'',
    latitude:"",
    show:true,
    controls:[{
      id:1,
      position:{
        left: app.globalData.globalWidth/2-17,
        top: (app.globalData.globalHeight-40)/2-42,
        width:46,
        height:50
      },
      iconPath:'/resources/now.png',
    },
    {
      id: 2,
      position: {
        left: 30,
        top: app.globalData.globalHeight - 100,
        width: 46,
        height: 50
      },
      iconPath: '/resources/location.png',
      clickable: true
    }],
    markers:[{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: '',
      longitude: '',
      width: 50,
      height: 50
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   top: (app.globalData.globalHeight - 40) / 2 - 42 +'px';
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getLocation();
  },
getLocation() {
  let _this = this;
  wx.getLocation({
    type: 'gcj02 ',
    altitude: '',
    success(res) {
      _this.setData({
        longitude: res.longitude,
        latitude: res.latitude
      })
    }
  })
},
  controltap(e) {
    this.mapCtx.moveToLocation();
  },
  toPlay() {
    wx.navigateTo({
      url: '/page/my/index',
    })
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