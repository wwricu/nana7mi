<template>
  <div id="image" :class="{'leftIn':Display==true,'leftOut':Display==false}">简介</div>
  <div id="intro" :class="{'rightIn':Display==true,'rightOut':Display==false}"></div>
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
#image {
  top: 100px;
  left: 50%;
  height: 640px;
  width: 480px;
  transform: translateX(-120%);
  position: absolute;
  z-index: 100;
  background-color: green;
  text-align: center;
  padding-top: 60px;
  font-size: 30px;
  color: white;
}
#intro {
  top: 100px;
  right: 50%;
  height: 640px;
  width: 480px;
  transform: translateX(120%);
  position: absolute;
  z-index: 100;
  background: url("../assets/image/kachiyu_.jpg") no-repeat;
  background-size: cover;
}

</style>

<style>
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
</style>
