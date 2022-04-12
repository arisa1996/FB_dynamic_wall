<template>
  <div class="w-full relative z-10">
    <div class="base_title_box">
      <h2>張貼動態</h2>
    </div>
    <div class="post-item p-8">
      <p>貼文內容</p>
      <textarea name="postContent" rows="6" placeholder="輸入您的貼文內容" class="w-full border-2 px-4 py-3 rounded-none mt-1" @focus="isWarnHint = false"></textarea>
      <div class="rounded bg-black_x text-white w-32 gap-y-8 py-1 px-8 my-4 relative">
        <input ref="inputDOM" type="file" accept="image/*" class="opacity-0 w-full absolute left-0 z-10 cursor-pointer" @change="previewImage">
        <span>上傳圖片</span>
      </div>
      <div class="w-full border-2 rounded-lg h-40 mb-6">
        <img :src="image" class="h-full">
      </div>
      <div class="text-center">
        <div v-show="isWarnHint" class="hint_text mb-1">圖片檔案過大，僅限 1mb 以下檔案<br>圖片格式錯誤，僅限 JPG、PNG 圖片</div>
        <button class="py-3 px-32 border-2 rounded-lg bg-gray_s font-semibold hover:bg-yellow hover:text-black_x hover:shadow-btn" @click.prevent="submitPost()">送出貼文</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isWarnHint: false,
      preview: null,
      image: require('@/assets/image/banner_01.png')
    }
  },
  methods: {
    submitPost () {
      this.isWarnHint = true
    },
    previewImage (event) {
      var input = event.target
      if (input.files) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.preview = e.target.result
        }
        console.log(input.files[0])
        this.image = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>
