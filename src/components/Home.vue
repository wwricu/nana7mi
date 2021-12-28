<template>
  <div id="image" :class="{'rightIn':ifDisplay===true,'rightOut':ifDisplay===false}"></div>
  <el-descriptions id="intro" :class="{'leftIn':ifDisplay===true,'leftOut':ifDisplay===false}"
                   column=2 title="基本资料">
    <el-descriptions-item label-align="right" align="left" label="本名">七海Nana7mi</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="年龄">17岁</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="身高">159cm</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="生日">7月15日</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="发色">棕发</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="瞳色">金瞳</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="星座">巨蟹座</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="出身地区">鲨鲨王国</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="印象色">#4365ED</el-descriptions-item>
    <el-descriptions-item label-align="right" align="left" label="粉丝勋章">
      <el-tag size="small">脆鲨</el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name: "Home",
  props: {
    ifDisplay: Boolean(false),
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
  height: 70vmin;
  width: 50vmin;
  background-color: white; /*#4365ED*/
  opacity: 0.8;
  text-align: center;
  padding-top: 15rem;
  padding-left: 6rem;
  font-size: 2vmin;
  /*box-shadow: 10px 10px 5px #888888;*/
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  border-radius: 2rem;
  overflow: hidden;
}
#image {
  position: absolute;
  z-index: 10;
  top: 15rem;
  right: 50%;
  /*transform: translateX(120%);*/
  transform: translateX(60vmin);
  height: 70vmin;
  width: 50rem;
  background: url("../assets/image/home_page.jpg") no-repeat center center;
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
  /* medium screen and landscape iPad with two column video */
  #intro {
    left: 50%;
    height: 70vmin;
    width: 40%;
    transform: translateX(10%);
  }
  #image {
    right: 50%;
    height: 70vmin;
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

@media only screen and (min-height:1023px) and (max-width:1025px) {
  /* Portrait iPad */
  #intro {
    width: 50%;
    height: 50vh;
    padding-left: 1rem;
    font-size: 1rem;
    box-shadow: none;
  }
  #image {
    box-shadow: none;
    height: 50vh;
  }
}
@media only screen and (max-width: 767px) {
  /* small screen with one column video */
  #intro {
    top: 25vh;
    height: 70vh;
    width: 50%;
    transform: translateX(-50%);
    padding-left: 1vmin;
    padding-top: 5vmin;
  }
  #image {
    display: none;
  }
  @keyframes leftIn {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(-50%);
      opacity: 0.8;
    }
  }
  @keyframes leftOut {
    from {
      transform: translateX(-50%);
      opacity: 0.8;
    }
    to {
      transform: translateX(-50%);
      opacity: 0;
    }
  }
}
@media only screen and (max-width: 429px) and (min-height: 428px) {
  /* smaller than iPad */
  #intro {
    top: 25vh;
    height: 50vh;
    width: 80%;
    transform: translateX(-50%);
    padding: 5vmin 0 0 10vmin;
    font-size: 3vmin;
  }
}
</style>
