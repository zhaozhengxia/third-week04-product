<template>
  <div>
   <jx-header></jx-header>
    <jx-cart-shop-list></jx-cart-shop-list>
    <jx-cart-shop-list></jx-cart-shop-list>
    <jx-cart-footer></jx-cart-footer>
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
      "jx-header":MyHeader,
      "jx-cart-shop-list":ShopList,
      "jx-cart-footer":MyFooter
    },
    data:function(){
      return{
        cartInfo:{}
      }
    },
    created:function(){
      this._initPageData();
    },
    methods:{

      /**
       * @private
       */
      _initPageData(){
        CartApi.getCartInfoByUserId(data=>{
          console.log(data)
          this.cartInfo= data;
        })
      }
    }
  }
</script>

<style>
@import "../assets/carts.css";
</style>
