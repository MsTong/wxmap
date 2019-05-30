App({
  globalData: {
    globalWidth:'',
    globalHeight:''
  },
  onLaunch: function () {
    try {
      const res = wx.getSystemInfoSync();
      this.globalData.globalWidth = res.windowWidth;
      this.globalData.globalHeight = res.windowHeight;
    } catch (e) {
      // Do something when catch error
    }
  }
})
