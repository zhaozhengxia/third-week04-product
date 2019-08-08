<template>
  <div class="payment-bar">
    <div class="all-checkbox">
      <input type="checkbox" @change="tcheckAll"  v-model="data.checked" class="check goods-check"/>
      全选
    </div>
    <div class="shop-total">
      <strong>
        总价：
        <i id="AllTotal" class="total">{{data | totalPrice}}</i>
      </strong>
      <span>减免：100</span>
    </div>
    <a href="#" class="settlement">结算</a>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props: ["data"],//真个购物车信息 cartInfo
    methods:{
      tcheckAll(){
        this.$emit("checkedAll")
      }
    },
    filters:{
      /**
       * 用来计算总价格的一个过滤器  computed ->data filter -> xxx
       * @param cartinfo
       * @returns {number}
       */
      totalPrice(cartinfo){
        let total =0;
        cartinfo.shops.forEach((shop,sid)=>{
          shop.products.forEach((product,pid)=>{
            if(product.checked){
              total += product.price * product.num
            }
          })
        })
        return total
      }
    }


  }
</script>

<style scoped>

</style>
