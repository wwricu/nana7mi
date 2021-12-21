<template>
  <iframe class="origin_video" :src='["//player.bilibili.com/player.html?bvid=" + BV]' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</template>

<script>
export default {
  name: "BVideo",
  props: {
    BV: String
  }
}
</script>

<style scoped>
</style>