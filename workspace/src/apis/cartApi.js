import Api from "../commons/Api";

const baseUrl = "http://localhost:3000";
//获取cartInfo的接口地址
const CARURL = `${baseUrl}/api/cartInfo`;

export default {

  /*
  * 根据用户获取购物车信息
  * */
  getCartInfoByUserId(cb) {
    Api.get(CARURL,cb)
  }
}
