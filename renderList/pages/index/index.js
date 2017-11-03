//index.js
//获取应用实例
const app = getApp()
/* wx:for 
Page({
 data: {
   array: [1,2,3]
 }
})*/

/* wx:key*/
Page({
 data: {
   array: [1,2,3],
   objectArray: [
     {id: 0,unique: 'id0'},
     {id: 1,unique: 'id1'}
  ]},
 switch: function (e) {
  const length = this.data.objectArray.length;
  for(let i = 0;i < length;i++){
    const x = Math.floor(Math.random() * length);
    const y = Math.floor(Math.random() * length);
    const temp = this.data.objectArray[x];
    this.data.objectArray[x] = this.data.objectArray[y];
    this.data.objectArray[y] = temp;
  }
  this.setData({
    objectArray: this.data.objectArray
  })
 },
 addToFront: function(){
  const length = this.data.objectArray.length;
  this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray);
  this.setData({
    objectArray: this.data.objectArray
  })
 },
 addNumberToFront: function(){
  this.data.array = [this.data.array.length + 1].concat(this.data.array);
  this.setData({
    array: this.data.array
  })
 }
})
