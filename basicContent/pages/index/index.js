//index.js
//获取应用实例
const app = getApp()

//icon
/*Page({
  data: {
    iconSize: [20,30,40,50,60,70],
    iconColor: ['red','orange','yellow','green','rgb(0,255,255)','bule','purple'],
    iconType: ['success','success_no_circle','info','warn','waiting','cancel','download','search','clear']
  }
})*/

//text
/*var initData = 'this is first line\nthis is second line';
var extraLine = [];

Page({

  *
   * 页面的初始数据
   
  data: {
    text: initData
  },

  add: function(e) {
    extraLine.push('other line');
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    });
  },

  remove: function(e) {
    if(extraLine.length > 0){
      extraLine.pop();
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      });
    }
  }
})*/

//rich-text
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px;color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  
  tap: function(e) {
    console.log(e);
  }
})