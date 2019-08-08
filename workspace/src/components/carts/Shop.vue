<template>
  <div class="shop-group-item">
    <div class="shop-name">
      <input type="checkbox" @change="shopChecks(sid)" v-model="data.checked"
             class="check goods-check shopCheck">
      <h4>
        <a href="#">{{data.shopName}}</a>
      </h4>
      <div class="coupons">
        <span>领券</span>
        <em>|</em>
        <span>编辑</span>
      </div>
    </div>
    <jx-cart-product-list :add="add" :reduce="reduce" :pcheck="pcheck" :sid="sid" :data="data.products"></jx-cart-product-list>
    <div class="shopPrice">
      本店总计：
      ￥<span class="shop-total-amount ShopTotal">{{data | shopTotalPrcie}}</span>
    </div>
  </div>

</template>

<script>
  import ProductList from './ProductList'

  export default {
    name: "Shop",
    props:["data","sid","pcheck","add","reduce"],//data代表店铺信息   sid店铺编号
    components: {
      "jx-cart-product-list": ProductList
    },
    methods:{
      shopChecks(sid){
        this.$emit("shopCheck",sid);
      }
    },
    filters:{
      /**
       * 算店铺的总价
       * */
      shopTotalPrcie(shop){
        let total = 0;
        shop.products.forEach((product,pid)=>{
          if(product.checked){
            total += product.num * product.price;
          }
        })
          return total;
      }
    }
  }
</script>

<style scoped>

</style>
