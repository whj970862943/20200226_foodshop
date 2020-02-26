/*
路由器对象模块
 */

import  Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../Pages/MSite/MSite.vue'
import Search from '../Pages/Search/Search.vue'
import Order from '../Pages/Order/Order.vue'
import Profile from '../Pages/Profile/Profile.vue'
import Login from '../Pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },

    //默认路由
    {
      path:'/',
      redirect:'/msite',
      meta:{
        showFooter:false
      }
    },

    //登录
    {
      path:'/login',
      component:Login,
      meta:{
        showFooter:false
      }
    }
  ]
})