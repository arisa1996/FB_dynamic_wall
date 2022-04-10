import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DynamicWall from './views/DynamicWall.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dynamicWall',
      name: 'dynamicWall',
      component: DynamicWall
    }
  ]
})
