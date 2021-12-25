<template>
  <div class="wrapper" :class="Display?'plainIn':'plainOut'">
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
    Display: Boolean
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
.wrapper {
  width: 100%;
  text-align: center;
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #000;
  font-size: 20rem;
  text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
  transform: translate(0, 100%) rotate(4deg);
  display: inline-block;
  position: fixed;
  z-index: -10;
  opacity: 0.6;
  font-family: "Titan One", cursive;
  background-color: transparent;
}

.wrapper span:nth-child(1) {
  color: #996258;
}
.wrapper span:nth-child(2) {
  color: #dcdcdc;
}
.wrapper span:nth-child(3) {
  color: #996258;
}
.wrapper span:nth-child(4) {
  color: #dcdcdc;
}
.wrapper span:nth-child(5) {
  color: #4365ED;
}
.wrapper span:nth-child(6) {
  color: #b42e2a;
}
.wrapper span:nth-child(7) {
  color: #383838;
}
</style>