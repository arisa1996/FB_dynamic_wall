<template>
  <div class="w-full">
    <div class="flex justify-between mb-4">
          <select class="base_select w-40">
              <option selected>最新貼文</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </select>
          <div class="w-63 flex">
            <input type="text" class="w-full border-2 px-4 focus:bg-white focus:outline-none" placeholder="搜尋貼文">
            <button class="w-11 bg-blue_x border-2 border-l-0">
              <svg class="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
    </div>
    <ul v-if="posts">
      <li v-for="(post, idx) in posts" :key="idx" class="post-item mb-4 p-6">
        <div class="flex items-center">
          <div class="base_circle w-11 h-11">
            <img v-if="post.userImg" :src="post.userImg" :alt="post.name">
          </div>
          <div class="posted_by ml-4 cursor-pointer">
            <p class="font-bold name">{{ post.name }}</p>
            <p class="text-gray_m text-xs">{{ post.createdAt }}</p>
          </div>
        </div>
        <div class="my-4">
          <div class="mb-4">{{ post.content }}</div>
          <div v-if="post.banner" class="border-1 rounded-lg">
            <img v-if="post.banner" :src="post.banner" alt="post_image">
          </div>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-1" :class="post.likes > 0 ? 'text-blue_x': 'text-gray_m'" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          <span :class="post.likes > 0 ? 'text-black_x': 'text-gray_m'">{{ post.likes ? post.likes: '成為第一個按讚的朋友' }}</span>
        </div>
        <div class="flex items-center my-4">
          <div class="base_circle w-10 h-10 mr-2">
            <img v-if="post.userImg" :src="post.userImg">
          </div>
          <div class="w-full h-10 flex">
            <input type="text" class="w-full border-2 px-4 focus:bg-white focus:outline-none" placeholder="留言...">
            <button class="w-2/5 border-2 border-l-0 flex items-center justify-center" :class="post.isSubmitMsg ? 'bg-yellow' : 'bg-blue_x'" @click="submitMsg(post, idx)">
              <span :class="post.isSubmitMsg ? '' : 'text-white'">留言</span>
              <div v-if="post.isSubmitMsg" style="border-top-color:transparent" class="w-4 h-4 border-2 border-blue-400 border-dotted rounded-full animate-spin ml-1">
              </div>
            </button>
          </div>
        </div>
        <ul v-if="post.messages.length > 0">
          <li v-for="(msg, idx) in post.messages" :key="idx" class="bg-brown_x rounded-xl mb-2 p-4">
            <div class="flex items-start">
              <div class="base_circle w-11 h-11">
                <img v-if="msg.headerImg" :src="msg.headerImg">
              </div>
              <div class="ml-4">
                <p class="font-bold">{{ msg.name }}</p>
                <p class="text-gray_m text-xs mb-2">{{ msg.createdAt }}</p>
                <p>{{ msg.content }}</p>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <div v-else class="post-item">
      <div class="border-b-2 p-3">ooo</div>
      <div class="text-gray_m p-6 text-center">目前尚無動態，新增一則貼文吧！</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          name: '邊緣小杰',
          userImg: require('@/assets/image/user6.png'),
          content: '外面看起來就超冷.... 我決定回被窩繼續睡....>.<',
          banner: require('@/assets/image/banner_01.png'),
          createdAt: '2022/1/10 12:00',
          likes: 12,
          messages: [
            {
              name: '希琳',
              headerImg: require('@/assets/image/user1.png'),
              createdAt: '2022/1/11 10:00',
              content: '真的～我已經準備冬眠了'
            },
            {
              name: '波吉',
              headerImg: require('@/assets/image/user5.png'),
              createdAt: '2022/1/11 10:00',
              content: '會嗎？我沒穿衣服都不覺得冷'
            }
          ],
          isSubmitMsg: false
        },
        {
          name: '波吉',
          userImg: require('@/assets/image/user5.png'),
          content: '我一定要成為很棒棒的國王！',
          banner: '',
          createdAt: '2022/1/10 12:00',
          likes: 0,
          messages: [],
          isSubmitMsg: false
        },
        {
          name: '阿爾敏',
          userImg: require('@/assets/image/user4.png'),
          content: '各位我有一個作戰計畫',
          banner: '',
          createdAt: '2022/1/10 12:00',
          likes: 7,
          messages: [],
          isSubmitMsg: false
        }
      ],
      menu: [
        {
          title: '邊緣小杰',
          img: require('@/assets/image/user6.png'),
          icon: ''
        },
        {
          title: '追蹤名單',
          icon: 'bell'
        },
        {
          title: '我按讚的文章',
          icon: 'thumb-up'
        }
      ]
    }
  },
  methods: {
    submitMsg (data, idx) {
      data.isSubmitMsg = true
    }
  }
}
</script>

<style lang="scss">
.posted_by:hover {
  .name{
    @apply text-blue_x underline;
  }
}
</style>
