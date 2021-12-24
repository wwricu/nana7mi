<template>
<!--  <el-card id="intro" :class="{'leftIn':Display==true,'leftOut':Display==false}">-->
<!--    <div class="wrapper">-->
<!--      <span>N</span>-->
<!--      <span>A</span>-->
<!--      <span>N</span>-->
<!--      <span>A</span>-->
<!--      <span>7</span>-->
<!--      <span>M</span>-->
<!--      <span>I</span>-->
<!--    </div>-->
<!--  </el-card>-->
  <div id="image" :class="{'rightIn':Display==true,'rightOut':Display==false}"></div>
  <el-descriptions id="intro" :class="{'leftIn':Display==true,'leftOut':Display==false}"
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
  transform: translateX(-120%);
  height: 70rem;
  width: 50rem;
  background-color: white; /*#4365ED*/
  opacity: 0.75;
  text-align: center;
  padding-top: 15rem;
  padding-left: 6rem;
  font-size: 2rem;
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
  transform: translateX(120%);
  height: 70rem;
  width: 50rem;
  background: url("../assets/image/kachiyu_.jpg") no-repeat fixed center 0;
  background-size: cover;
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
    transform: translateX(-250%);
    opacity: 0;
  }
  to {
    transform: translateX(-120%);
    opacity: 1;
  }
}
@keyframes leftOut {
  from {
    transform: translateX(-120%);
    opacity: 1;
  }
  to {
    transform: translateX(-250%);
    opacity: 0;
  }
}
@keyframes rightIn {
  from {
    transform: translateX(250%);
    opacity: 0;
  }
  to {
    transform: translateX(120%);
    opacity: 1;
  }
}
@keyframes rightOut {
  from {
    transform: translateX(120%);
    opacity: 1;
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
    width: 50%;
    transform: translateX(0);
  }
  #image {
    right: 50%;
    height: 70rem;
    width: 50%;
    transform: translateX(0);
  }

  /* Animations */
  @keyframes leftIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes leftOut {
    from {
      transform: translateX(-100%);
      opacity: 1;
    }
    to {
      transform: translateX(0);
      opacity: 0;
    }
  }
  @keyframes rightIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes rightOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
}

@media only screen and (min-height:1400px) and (max-width: 1200px) {
  #intro {
    height: 70rem;
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
/* jumping letters */
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
.wrapper {
  width: 100%;
  text-align: center;
}
.wrapper span {
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #000;
  font-size: 5rem;
  text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
  transform: translate(0, 100%) rotate(4deg);
  animation: jump 2s ease-in-out;
  display: inline-block;
  font-family: "Titan One", cursive;
  color: #fff;
}
.wrapper span:nth-child(1) {
  animation-delay: 120ms;
}
.wrapper span:nth-child(2) {
  animation-delay: 240ms;
}
.wrapper span:nth-child(3) {
  animation-delay: 360ms;
}
.wrapper span:nth-child(4) {
  animation-delay: 480ms;
}
.wrapper span:nth-child(5) {
  animation-delay: 600ms;
}
.wrapper span:nth-child(6) {
  animation-delay: 720ms;
}
.wrapper span:nth-child(7) {
  animation-delay: 840ms;
}

@keyframes jump {
  33% {
    text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
  }
  50% {
    transform: translate(0, 0) rotate(-4deg);
    text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
  }
  66.67% {
    text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
  }
}
@media screen and (max-height: 200px) {
  .wrapper {
    transform: scale(0.3, 0.3);
  }
}
@media screen and (max-width: 576px) {
  .wrapper span {
    font-size: 50px;
  }
}
</style>
