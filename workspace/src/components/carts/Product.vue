<template>
  <li>
    <div class="shop-info">
      <input type="checkbox" :pcheck="pcheck(sid,pid)"  v-model="data.checked"
             class="check goods-check goodsCheck" />
      <div class="shop-info-img">
        <a href="#">
          <img :src="data.pic" />
        </a>
      </div>
      <div class="shop-info-text">
        <h4>
          {{data.title}}
        </h4>
        <div class="shop-brief">
          <span>重量:{{data.attrs.weight}}</span>
          <span>颜色:{{data.attrs.color}}</span>
          <span>版本:{{data.attrs.version}}</span>
        </div>
        <div class="shop-price">
          <div class="shop-pices">
            ￥<b class="price">{{data.price}}</b>
          </div>
          <div class="shop-arithmetic">
            <a class="minus" @click="reduce(sid,pid)">-</a>
            <span class="num">{{data.num}}</span>
            <a class="plus" @click="add(sid,pid)">+</a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: "Product",
    props:["data","sid","pid","pcheck","add","reduce"]//data 商品信息  pid 商品编号 sid 店铺编号
  }
</script>

<style scoped>

</style>
