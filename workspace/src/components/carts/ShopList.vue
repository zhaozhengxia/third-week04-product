<template>
  <div class="shopping">
    <jx-cart-shop :add="add" :reduce="reduce" :pcheck="pcheck" @shopCheck="shopCheck" :key="sid" :data="shop" :sid="sid" v-for="(shop,sid) in data"></jx-cart-shop>
  </div>
</template>

<script>
  import Shop from './Shop';

  export default {
    name: "ShopList",
    props:["data","pcheck","add","reduce"],
    methods:{
      shopCheck(sid){
        this.$emit("shopCheckAll",sid)
      }
    },
    components: {
      "jx-cart-shop": Shop
    }
  }
</script>

<style scoped>

</style>
