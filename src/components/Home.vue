<template>
  <div id="image" :class="{'rightIn':Display===true,'rightOut':Display===false}"></div>
  <el-descriptions id="intro" :class="{'leftIn':Display===true,'leftOut':Display===false}"
                   column=2 title="基本资料">
    <el-descriptions-item label-align="right" align="left" label="本名">七海Nana7mi</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="发色">棕发</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="瞳色">金瞳</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="身高">159cm</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="年龄">17岁</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="生日">7月15日</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="星座">巨蟹座</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="出身地区">鲨鲨王国</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="印象色" style="color: #4365ED">#4365ED</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="粉丝勋章">
      <el-tag size="small">脆鲨</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="特技" width="2">鱼人语、可以随时随地睡着、可以睡很久</el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name: "Home",
  props: {
    Display: Boolean,
  }
}
</script>

<style scoped>
.el-descriptions__title {
  font-size: 2rem;
}
#intro {
  position: absolute;
  z-index: 10;
  top: 15rem;
  left: 50%;
  /*transform: translateX(-120%);*/
  transform: translateX(-60vmin);
  height: 70rem;
  width: 50rem;
  background-color: white; /*#4365ED*/
  opacity: 0.8;
  text-align: center;
  padding-top: 15rem;
  padding-left: 6rem;
  font-size: 1vmin;
  /*box-shadow: 10px 10px 5px #888888;*/
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  border-radius: 2rem;
}
#image {
  position: absolute;
  z-index: 10;
  top: 15rem;
  right: 50%;
  /*transform: translateX(120%);*/
  transform: translateX(60vmin);
  height: 70rem;
  width: 50rem;
  background: url("../assets/image/kachiyu_.jpg") no-repeat center center;
  background-size: cover;
  opacity: 0.9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  border-radius: 2rem;
}

.leftIn {
  animation: leftIn 1s ease;
}
.leftOut {
  animation: leftOut 1s ease;
  animation-fill-mode: forwards;
}
.rightIn {
  animation: rightIn 1s ease;
}
.rightOut {
  animation: rightOut 1s ease;
  animation-fill-mode: forwards;
}
@keyframes leftIn {
  from {
    /*transform: translateX(-250%);*/
    transform: translateX(-150vmin);
    opacity: 0;
  }
  to {
    /*transform: translateX(-120%);*/
    transform: translateX(-60vmin);
    opacity: 0.8;
  }
}
@keyframes leftOut {
  from {
    /*transform: translateX(-120%);*/
    transform: translateX(-60vmin);
    opacity: 0.8;
  }
  to {
    /*transform: translateX(-250%);*/
    transform: translateX(-150vmin);
    opacity: 0;
  }
}
@keyframes rightIn {
  from {
    /*transform: translateX(250%);*/
    transform: translateX(150vmin);
    opacity: 0;
  }
  to {
    /*transform: translateX(120%);*/
    transform: translateX(60vmin);
    opacity: 0.9;
  }
}
@keyframes rightOut {
  from {
    transform: translateX(120%);
    opacity: 0.9;
  }
  to {
    transform: translateX(250%);
    opacity: 0;
  }
}

@media only screen and (max-width:1200px) {
  /* Video animation fit */
  #intro {
    left: 50%;
    height: 70rem;
    width: 40%;
    transform: translateX(10%);
  }
  #image {
    right: 50%;
    height: 70rem;
    width: 40%;
    transform: translateX(-10%);
  }

  /* Animations */
  @keyframes leftIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(10%);
      opacity: 0.8;
    }
  }
  @keyframes leftOut {
    from {
      transform: translateX(-100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(10%);
      opacity: 0;
    }
  }
  @keyframes rightIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(-10%);
      opacity: 0.9;
    }
  }
  @keyframes rightOut {
    from {
      transform: translateX(-10%);
      opacity: 0.9;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
}

@media only screen and (min-height:1400px) and (max-width: 1200px) {
  #intro {
    width: 50%;
    padding-left: 1rem;
    height: 50rem;
    font-size: 1rem;
    box-shadow: none;
  }
  #image {
    height: 50%;
    box-shadow: none;
  }
}
</style>
