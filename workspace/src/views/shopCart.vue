<template>
  <div>
    <jx-header></jx-header>
    <jx-cart-shop-list :add="addNum" :reduce="reduceNum" :pcheck="productCheckAll" @shopCheckAll="shopCheckedAll" v-if="cartInfo.shops" :data="cartInfo.shops"></jx-cart-shop-list>
    <jx-cart-footer @checkedAll="checkAll" :data="cartInfo"></jx-cart-footer>
  </div>
</template>

<script>
  import MyHeader from "../components/commons/MyHeader";
  import MyFooter from "../components/carts/MyFooter";
  import ShopList from "../components/carts/ShopList";
  import CartApi from "../apis/cartApi";

  export default {
    name: "ShopCart",
    components: {
      "jx-header": MyHeader,
      "jx-cart-shop-list": ShopList,
      "jx-cart-footer": MyFooter
    },
    data: function () {
      return {
        cartInfo: {}//组件中的数据
      }
    },
    created: function () {
      this._initPageData();
    },
    methods: {

      /**
       * 获取cartInfo的所有数据
       * @private
       */
      _initPageData() {
        CartApi.getCartInfoByUserId((data) => {
          this.cartInfo = data;
        })
      },
      /**
       * 总体的单选与反选
       * */
      checkAll() {
        let checked = this.cartInfo.checked;//真个cartInfo的checked
        this.cartInfo.shops.forEach((shop, sid) => {//循环所有的店铺
          shop.checked = checked;//修改店铺的checked值
          shop.products.forEach((product, pid) => {//循环所有的商品
            product.checked = checked;//修改商品的checked值
          })
        })
      },
      /**
       * 根据店铺的编号修改状态
       * 店铺的全选或者反选
       * */
      shopCheckedAll(sid) {
       let checked = this.cartInfo.shops[sid].checked;//指定的店铺的选中状态
        /**
         * 指定店铺下的商品的选中状态
         * */
        this.cartInfo.shops[sid].products.forEach((product, sid) => {
          product.checked = checked;
        })
        /**
         * 修改购物车的选中状态
         * 只要有一个店铺是false,则全选为false
         * */
        let isChecked = this.cartInfo.shops.every((shop, sid, arr) => {
          return shop.checked == true
        })
        this.cartInfo.checked = isChecked;
      },
      /**
       * 根据商品的编号改变状态
       * @param sid 店铺的编号
       * @param pid  商品的编号
       * */
      productCheckAll(sid,pid){
        //判断是那个商品被点中了
        let isChecked = this.cartInfo.shops[sid].products.every((product, pid, arr) => {
          return product.checked == true
        })

        //当前的店铺的状态
        this.cartInfo.shops[sid].checked = isChecked;

        //当前店铺状态改变总体状态
        let isCheck = this.cartInfo.shops.every((shop,sid,arr)=>{
          return shop.checked == true
        })
        this.cartInfo.checked = isCheck;
       },
      addNum(sid,pid){
        /**
         * @param sid
         * @param pid
         * 根据店铺+商品编号改变商品的数量
         * */
        this.cartInfo.shops[sid].products[pid].num++
      },
      reduceNum(sid,pid){
        /**
         * @param sid
         * @param pid
         * 根据店铺+商品编号改变商品的数量
         * */
        // this.cartInfo.shops[sid].products[pid].num++
        if(this.cartInfo.shops[sid].products[pid].num<=1){
          this.cartInfo.shops[sid].products[pid].num = 1;
        }else{
          this.cartInfo.shops[sid].products[pid].num--
        }
      }

    }
  }
</script>

<style>
  @import "../assets/carts.css";
</style>
