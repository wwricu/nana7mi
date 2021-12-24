<template>
  <div style="height: 120rem">
    <el-steps direction="vertical" :active="activeStep">
      <el-step title="精选原创"></el-step>
      <el-step title="精选二创"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "ScrollBar",
  props: {
    activeStep: Number,
    height: Number
  }
}
</script>

<style scoped>

</style>