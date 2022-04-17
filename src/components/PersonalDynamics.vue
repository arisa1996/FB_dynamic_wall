<template>
  <div class="w-full relative z-10">
    <div class="base_title_box round_box rounded-lg h-16 mb-8 flex">
      <div class="w-20 border-r-2">
        <img src="@/assets/image/banner_01.png" class="h-full object-cover">
      </div>
      <div class="flex justify-between items-center w-full p-3">
        <div class="w-full leading-tight">
          <p>波及</p>
          <p class="font-medium">987,987 人追蹤</p>
        </div>
        <button class="h-9 border-2 rounded-lg shadow-btn-bottom text-center font-semibold text-black_x" :class="isTrack ? 'w-24 bg-yellow' : 'w-32 bg-brown_x'" @click="isTrack = !isTrack">{{ isTrack ? '追蹤':'取消追蹤' }}</button>
      </div>
    </div>
    <PostsWall></PostsWall>
  </div>
</template>

<script>
import PostsWall from '@/components/PostsWall.vue'
export default {
  data () {
    return {
      isTrack: true
    }
  },
  components: {
    PostsWall
  }
}
</script>

<style lang="scss" scoped>
.w-full .base_title_box{
  padding: 0;
  text-align: left;
  font-size: 16px;
}
.round_box::before{
  content: '';
  border-radius: 8px;
}
</style>
