export default {
  /***
   * 获取数据
   * **/
  get: function (url,cb) {
      fetch(url).then((response)=>{
        response.json().then(cb)
      })
  }
}
