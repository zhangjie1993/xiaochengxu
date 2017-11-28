//index.js
//获取应用实例
const app = getApp()

//scroll-view
//var order = ['red','yellow','blue','green','red'];

/*Page({
  data: {
   toView: 'red',
   scrollTop: 100
  },

  upper: function(e) {
    console.log(e);
  },

  lower: function(e) {
    console.log(e);
  },

  scroll: function(e) {
    console.log(e);
  },

  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        });
        break
      }
    }
  },

  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTap + 10
    });
  }  
})*/

//swiper

/*Page({

  *
   * 页面的初始数据
   */
  /*
  data: {
    imgUrls: [
      '../images/img1.jpg',
      '../images/img2.jpg',
      '../images/img3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },

  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },

  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    });
  },

  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
*/

//movable-view
/*Page({

  *
   * 页面的初始数据
   
  data: {
      x: 0,
      y: 0
  },
  tap: function(e) {
    this.setData({
      x: 30,
      y: 30
    })
  }
})*/

//cover-view
Page({

  /**
   * 页面的初始数据
   */
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo');
  },
  
  play() {
    this.videoCtx.play();
  },
  
  pause() {
    this.videoCtx.pause();
  }
})

