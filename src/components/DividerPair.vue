<template>
  <div>
    <p :style="{'opacity':opacity}">{{ title }}</p>
    <el-divider id="divider1" content-position="center" :style="{'opacity':opacity}"></el-divider>
<!--    <el-divider id="divider2" content-position="center" :style="{'opacity':opacity}"></el-divider>-->
  </div>
</template>

<script>
export default {
  name: "DividerPair",
  props: {
    title: String,
    opacity: Number
  }
}
</script>

<style scoped>
* {
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 3px;
  color: #eee;
}
p {
  position: absolute;
  height: 30px;
  width: 100%;
  top: 0;
  left: 50%;
  transform:translate(-50%);
  z-index: 1;
  text-align: center;
}
#divider1 {
  position: absolute;
  width: 100%;
  left: 50%;
  transform:translate(-50%);
  top: 100px;
  z-index: 1;
}
#divider2 {
  position: absolute;
  width: 100%;
  left: 50%;
  transform:translate(-50%);
  top: 500px;
  z-index: 1;
}
</style>