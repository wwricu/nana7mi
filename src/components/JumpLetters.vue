<template>
  <div :class="Display?'plainIn wrapper':'plainOut'">
    <span>N</span>
    <span>A</span>
    <span>N</span>
    <span>A</span>
    <span>7</span>
    <span>M</span>
    <span>I</span>
  </div>
</template>

<script>
export default {
  name: "JumpLetters",
  props: {
    Display: Boolean
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
.wrapper {
  width: 100%;
  text-align: center;
}
.wrapper span {
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #000;
  font-size: 20rem;
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