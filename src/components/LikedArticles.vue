<template>
  <div class="w-full relative z-10">
    <div class="base_title_box">
      <h2>我按讚的貼文</h2>
    </div>
    <ul>
      <li v-for="(item, idx) in list" :key="idx" class="post-item mb-4 p-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="no_border_circle">
            <img v-if="item.img" :src="item.img" :alt="item.name">
          </div>
          <div class="ml-4">
            <p class="font-extrabold">{{ item.name }}</p>
            <p class="text-gray_m text-sm">發文時間：{{ item.createdAt }}</p>
          </div>
        </div>
        <div class="text-sm flex">
          <div class="mr-8">
            <svg class="w-5 h-5 mx-auto mb-1 text-blue_x" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
            <p>取消</p>
          </div>
          <div class="">
            <svg class="w-5 h-5 dark:text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p>查看</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '愛爾敏',
          img: require('@/assets/image/user5.png'),
          isLiked: true,
          createdAt: '2022/2/14 12:00'
        },
        {
          name: '愛爾敏',
          img: require('@/assets/image/user5.png'),
          isLiked: true,
          checkUrl: '',
          createdAt: '2022/1/24 15:30'
        },
        {
          name: '米卡莎',
          img: require('@/assets/image/user2.png'),
          isLiked: true,
          checkUrl: '',
          createdAt: '2022/1/10 14:20'
        },
        {
          name: '李維',
          img: require('@/assets/image/user1.png'),
          isLiked: true,
          checkUrl: '',
          createdAt: '2021/12/4 12:12'
        },
        {
          name: '米歇爾',
          img: require('@/assets/image/user4.png'),
          isLiked: true,
          checkUrl: '',
          createdAt: '2021/12/2 22:00'
        },
        {
          name: '希琳',
          img: require('@/assets/image/user3.png'),
          isLiked: true,
          checkUrl: '',
          createdAt: '2021/12/2 22:00'
        }
      ]
    }
  }
}
</script>
