import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DynamicWall from './views/DynamicWall.vue'
// import TrackList from './views/TrackList.vue'
// import LikedArticles from './views/LikedArticles.vue'

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
    // {
    //   path: '/trackList',
    //   name: 'trackList',
    //   component: TrackList
    // },
    // {
    //   path: '/likedArticles',
    //   name: 'likedArticles',
    //   component: LikedArticles
    // }
  ]
})
