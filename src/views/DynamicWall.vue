<template>
  <div class="min-h-screen">
    <Header @change-key="changeKey"></Header>
    <div class="container mx-auto w-11/12 md:w-9/12 xl:w-7/12">
      <div class="flex justify-between items-start py-4 md:py-12">
        <div class="w-7/12">
          <PostsWall v-if="defaultKey === 'posts'"></PostsWall>
          <TrackList v-if="defaultKey === 'trackList'" @change-key="changeKey"></TrackList>
          <LikedArticles v-if="defaultKey === 'likedArticles'"></LikedArticles>
          <PersonalInfo v-if="defaultKey === 'personalInfo'"></PersonalInfo>
          <PostNews v-if="defaultKey === 'postNews'"></PostNews>
          <PersonalDynamics v-if="defaultKey === 'personalDynamics'"></PersonalDynamics>
        </div>
        <div class="w-38 border-2 bg-white p-6">
          <button class="base_btn blue_btn hover:bg-yellow hover:text-black_x" type="button" @click="defaultKey = 'postNews'">張貼動態</button>
          <ul>
            <li v-for="(item, idx) in menu" :key="idx" class="menu_item flex items-center my-5 mx-1 cursor-pointer last:mb-0" @click="changeKey(item.key)">
              <div class="base_circle bg-blue_xs w-12 h-12 mr-4">
                <img v-if="item.img" :src="item.img">
                <svg v-if="item.icon === 'bell'" class="w-7 h-7 mx-auto my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                <svg v-if="item.icon === 'thumb-up'" class="w-7 h-7 mx-auto my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              </div>
              <p class="font-bold">{{ item.title }}</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostsWall from '@/components/PostsWall.vue'
import TrackList from '@/components/TrackList.vue'
import LikedArticles from '@/components/LikedArticles.vue'
import PersonalInfo from '@/components/PersonalInfo.vue'
import PostNews from '@/components/PostNews.vue'
import PersonalDynamics from '@/components/PersonalDynamics.vue'

export default {
  name: 'dynamicWall',
  components: {
    Header,
    PostsWall,
    TrackList,
    LikedArticles,
    PersonalInfo,
    PostNews,
    PersonalDynamics
  },
  data () {
    return {
      defaultKey: 'posts',
      menu: [
        {
          title: '邊緣小杰',
          img: require('@/assets/image/user6.png'),
          key: ''
        },
        {
          title: '追蹤名單',
          icon: 'bell',
          key: 'trackList'
        },
        {
          title: '我按讚的文章',
          icon: 'thumb-up',
          key: 'likedArticles'
        }
      ]
    }
  },
  methods: {
    changeKey (key) {
      this.defaultKey = key
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
</style>
