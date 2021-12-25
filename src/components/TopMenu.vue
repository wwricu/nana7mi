<template>
    <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        menu-trigger="click"
        unique-opened
    >
      <el-sub-menu index="1">
        <template #title>相关链接</template>
        <el-menu-item index="1-1">VirtuaReal</el-menu-item>
        <el-menu-item index="1-2">Nana7mi-直播间</el-menu-item>
        <el-menu-item index="1-3">Nana7mi-个人主页</el-menu-item>
        <el-menu-item index="1-3">Nana7mi-萌娘百科</el-menu-item>
      </el-sub-menu>
      <el-popover
          placement="bottom"
          :width="200"
          trigger="click"
          content="本站是VirtuaReal旗下虚拟主播七海Nana7mi的非商业性质非官方网站"
      >
        <template #reference>
          <el-button>关于本站</el-button>
        </template>
      </el-popover>
      <el-popover placement="bottom" :width="400" trigger="click">
        <template #reference>
          <el-button>版权说明</el-button>
        </template>
          <el-descriptions column=2 >
            <el-descriptions-item label-align="right" align="left" label="作者">
              <a href="https://space.bilibili.com/20769654" target="_blank">打牙专家, </a>
              <a href="https://space.bilibili.com/20769654" target="_blank">打牙专家</a>
            </el-descriptions-item>
            <el-descriptions-item label-align="right" align="left" label="图片版权">
              <a href="https://space.bilibili.com/20769654" target="_blank">A,</a>
              <a href="https://space.bilibili.com/20769654" target="_blank">B</a>
            </el-descriptions-item>
            <el-descriptions-item label-align="right" align="left" label="开源软件">
              <a href="https://github.com/vuejs/vue" target="_blank">Vue.js,</a>
              <a href="https://github.com/element-plus/element-plus" target="_blank">Element-plus</a>
            </el-descriptions-item>
            <el-descriptions-item label-align="right" align="left" label="部分素材来自">
              <a href="https://www.17sucai.com/" target="_blank">17素材</a>
            </el-descriptions-item>
          </el-descriptions>
      </el-popover>
      <el-popover
          placement="bottom"
          :width="200"
          trigger="click"
          content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>联系我们</el-button>
        </template>
        <el-descriptions column=1>
          <el-descriptions-item label-align="right" align="left" label="如对本站有任何意见或建议"></el-descriptions-item>
          <el-descriptions-item label-align="right" align="left" label="请联系">ybb@nana7mi.com</el-descriptions-item>
          <el-descriptions-item label-align="right" align="left" label="或">dayazhuanjia@outlook.com</el-descriptions-item>
        </el-descriptions>
      </el-popover>
    </el-menu>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeIndex = ref('0');
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    };
    return {
      activeIndex,
      handleSelect,
    }
  },
})
</script>
<style scoped>
button {
  border: none;
  color: black;
}
</style>
