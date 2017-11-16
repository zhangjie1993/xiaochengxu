//index.js
//获取应用实例
const app = getApp()

Page({
  tapName: function(event) {
    console.log(event);
    console.log(event.currentTarget.dataset.array);
  },

  handleTap1: function() {
    console.log("handle1");
  },

  handleTap2: function() {
    console.log("handle2");
  },

  handleTap3: function() {
    console.log("handle3");
  }, 

  handleTap4: function () {
    console.log("handle4");
  }
})
