<template>
  <div class="position" :class="Display?'wrapper':''">
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
.wrapper,
.position {
  width: 100%;
  text-align: center;
}
.position span,
.wrapper span {
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #000;
  font-size: 20rem;
  text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
  transform: translate(0, 100%) rotate(4deg);
  display: inline-block;
  font-family: "Titan One", cursive;
  color: #FFF;
}
.wrapper span {
  animation: jump 2s ease-in-out;
}

.position span:nth-child(1),
.wrapper span:nth-child(1) {
  color: #996258;
  animation-delay: 120ms;
}
.position span:nth-child(2),
.wrapper span:nth-child(2) {
  color: #dcdcdc;
  animation-delay: 240ms;
}
.position span:nth-child(3),
.wrapper span:nth-child(3) {
  color: #996258;
  animation-delay: 360ms;
}
.position span:nth-child(4),
.wrapper span:nth-child(4) {
  color: #dcdcdc;
  animation-delay: 480ms;
}
.position span:nth-child(5),
.wrapper span:nth-child(5) {
  color: #4365ED;
  animation-delay: 600ms;
}
.position span:nth-child(6),
.wrapper span:nth-child(6) {
  color: #b42e2a;
  animation-delay: 720ms;
}
.position span:nth-child(7),
.wrapper span:nth-child(7) {
  color: #383838;
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