import Vue from 'vue'
import Router from 'vue-router'
import shopCart from "../views/shopCart"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:shopCart
    }
  ]
})
