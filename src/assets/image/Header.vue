<template>
<div class="bg-white border-b-4">
  <div class="container mx-auto w-11/12 md:w-9/12 xl:w-7/12">
    <div class="flex justify-between items-center py-2 font_paytone">
      <h1 class="text-2xl font-black">MetaWall</h1>
      <div class="flex relative cursor-pointer" @mouseover="openNav = true" @mouseleave="openNav = false">
        <div class="base_circle w-8 h-8">
          <img v-if="userImg" :src="userImg" alt="user">
        </div>
        <p class="border-b-2 border-black_x ml-2.5 font-medium">Member</p>
        <nav v-show="openNav" class="w-44 z-50 bg-white absolute top-9 left-0 transition ease-in-out delay-200">
          <ul class="border-2">
            <li v-for="(item, idx) in headerMenu" :key="idx" class="py-2 text-center border-b-2 last:border-b-0 odd:bg-white even:bg-brown_x">
              <router-link :to="`/${item.routeKey}`">{{ item.title }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      openNav: false,
      headerMenu: [
        {
          title: '我的貼文牆',
          routeKey: ''
        },
        {
          title: '修改個人資料',
          routeKey: ''
        },
        {
          title: '登出',
          routeKey: ''
        }
      ],
      userImg: require('@/assets/image/user6.png')
    }
  }
}
</script>

<style lang="scss">
.menu_item:hover, .menu_item:active {
  .base_circle{
    @apply bg-blue_x text-white;
  }
  p {
    @apply text-blue_x;
  }
}
// .userInfo:hover nav{
//   display: block;
// }
// nav{
//   display: none;
// }
nav::after{
  content: '';
  width: 176px;
  height: 125px;
  border: 2px solid;
  background: white;
  position: absolute;
  top: 8px;
  left: 5px;
  z-index: -2;
}
</style>
