<template>
  <div class="container"
       :class="color_style===1?'style1':color_style===2?'style2':color_style===3?'style2 jump':''">
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
  name: "Background",
  props: {
    Display: Boolean,
    color_style: Number(0)
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
/*@font-face {*/
/*  !* Chrome compatibility *!*/
/*  font-family: 'Titan One';*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  src: url(https://fonts.gstatic.com/s/titanone/v7/mFTzWbsGxbbS_J5cQcjClDgm-khykw.woff2);*/
/*}*/
.container {
  /*top: -10rem;*/
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: -10;
  opacity: 0.6;
  background-color: transparent;
}
.container span {
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #000;
  font-size: 20rem;
  text-shadow: 0 0 #f3c623, 0 0 #f2aaaa;
  transform: translate(0, 100%) rotate(4deg);
  display: inline-block;
  font-family: "Titan One", cursive;
  color: white;
}
.container span:nth-child(5) {
  color: #4365ED;
}
.style1 span:nth-child(1) {
  color: #8adaed;
}
.style1 span:nth-child(2) {
  color: #75d6be;
}
.style1 span:nth-child(3) {
  color: #8adaed;
}
.style1 span:nth-child(4) {
  color: #75d6be;
}
.style1 span:nth-child(5) {
  color: #4365ED;
}
.style1 span:nth-child(6) {
  color: #ffca67;
}
.style1 span:nth-child(7) {
  color: #ffb9b8;
}

.style2 span:nth-child(1) {
  animation-delay: 120ms;
  color: #996258;
}
.style2 span:nth-child(2) {
  animation-delay: 240ms;
  color: #dcdcdc;
}
.style2 span:nth-child(3) {
  animation-delay: 360ms;
  color: #996258;
}
.style2 span:nth-child(4) {
  animation-delay: 480ms;
  color: #dcdcdc;
}
.style2 span:nth-child(5) {
  animation-delay: 600ms;
  color: #4365ED;
}
.style2 span:nth-child(6) {
  animation-delay: 720ms;
  color: #b42e2a;
}
.style2 span:nth-child(7) {
  animation-delay: 840ms;
  color: #383838;
}

.jump span {
  animation: jump 1s ease-in-out;
}
@keyframes jump {
  33% {
    text-shadow: 0 30px #f37121, 0 150px #f2aaaa;
  }
  50% {
    transform: translate(0, 0) rotate(-4deg);
    text-shadow: 0 0 #8fc0a9, 0 0 #84a9ac;
  }
  66.67% {
    text-shadow: 0 -30px #d54062, 0 -150px #8fc0a9;
  }
}
@media only screen and (max-width:1700px) {
  .container span { font-size: 15rem; }
}
@media only screen and (max-width:1300px) {
  .container span { font-size: 10rem; }
}
@media only screen and (max-width:900px) {
  .container span { font-size: 5rem; }
}
</style>