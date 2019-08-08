<template>
  <ul>
    <jx-cart-shop-product :add="add" :reduce="reduce" :pcheck="pcheck" :data="product" :sid="sid" :pid="pid" v-for="(product,pid) in data"></jx-cart-shop-product>
  </ul>
</template>

<script>
  import Product from './Product'

  export default {
    name: "ProductList",
    props:["data","sid","pcheck","add","reduce"],//data代表商品的列表信息   sid是店铺编号
    components: {
      "jx-cart-shop-product": Product
    }
  }
</script>

<style scoped>

</style>
