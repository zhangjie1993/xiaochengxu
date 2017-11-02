//index.js
//获取应用实例
const app = getApp()

/*简单绑定
Page({
  data: {
    massage:"hello world!"
  }
})*/

/*组件属性
Page({
  data: {
      id: 0
  }
})*/

/*控制属性
Page({
  data: {
      condition: true
  }
})*/

/*算数运算 && 字符串运算
Page({
  data: {
    a: 1,
    b: 2,
    c: 3
  }
})*/

/*数据路径计算
Page({
  data: {
    object: {
      key: 1
    },
    array: ["hello","world"]
  }
})*/

/*数组组合
Page({
  data: {
    zero: 0,
    array: [2,3,4,5]
  }
})*/

/*对象组合*/
Page({
  data: {
    a: 0,
    b: 1,
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 4,
      d: 5
    }
  }
})