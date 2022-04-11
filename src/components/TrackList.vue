<template>
  <div class="w-full relative z-10">
    <div class="base_title_box">
      <h2>追蹤名單</h2>
    </div>
    <ul>
      <li v-for="(item, idx) in list" :key="idx" class="post-item mb-4 p-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="no_border_circle">
            <img v-if="item.img" :src="item.img" :alt="item.name">
          </div>
          <div class="ml-4">
            <p class="font-extrabold">{{ item.name }}</p>
            <p class="text-gray_m text-sm">您已追蹤 {{ item.tracks }} 天！</p>
          </div>
        </div>
        <div class="w-5/12 text-sm">追蹤時間：{{ item.createdAt }}</div>
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
          name: '波吉',
          img: require('@/assets/user5.png'),
          tracks: 90,
          createdAt: '2022/2/14 12:00'
        },
        {
          name: '多魯米',
          img: require('@/assets/user2.png'),
          tracks: 90,
          createdAt: '2022/1/24 15:30'
        },
        {
          name: '卡克',
          img: require('@/assets/user5.png'),
          tracks: 90,
          createdAt: '2022/1/10 14:20'
        },
        {
          name: '希琳',
          img: require('@/assets/user1.png'),
          tracks: 80,
          createdAt: '2021/12/4 12:12'
        },
        {
          name: '多瑪斯',
          img: require('@/assets/user4.png'),
          tracks: 80,
          createdAt: '2021/12/2 22:00'
        }
      ]
    }
  }
}
</script>
