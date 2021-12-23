<template>
<div class="origin">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-lg-3" :class="{'upIn':Display==true,'downOut':Display==false}">
        <div class="box">
          <img src="../assets/image/BV1vJ411B7ng.jpg" alt="">
          <div class="box-content">
            <div class="content">
              <span class="post">Web developer</span>
              <h3 class="title">Steve Thomas</h3>
            </div>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-search"></i></a></li>
              <li><a href="#"><i class="fa fa-link"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-lg-3" :class="{'downIn':Display==true,'upOut':Display==false}">
        <div class="box">
          <img src="../assets/image/BV1y4411P7Wg.jpg" alt="">
          <div class="box-content">
            <div class="content">
              <span class="post">Web designer</span>
              <h3 class="title">Kristina</h3>
            </div>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-search"></i></a></li>
              <li><a href="#"><i class="fa fa-link"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-lg-3" :class="{'upIn':Display==true,'downOut':Display==false}">
        <div class="box">
          <img src="../assets/image/BV1yf4y137XH.jpg" alt="">
          <div class="box-content">
            <div class="content">
              <span class="post">Web designer</span>
              <h3 class="title">Williamson</h3>
            </div>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-search"></i></a></li>
              <li><a href="#"><i class="fa fa-link"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-lg-3" :class="{'downIn':Display==true,'upOut':Display==false}">
        <div class="box">
          <img src="../assets/image/BV18q4y1z7Vv.jpg" alt="">
          <div class="box-content">
            <div class="content">
              <span class="post">Web designer</span>
              <h3 class="title">Williamson</h3>
            </div>
            <ul class="icon">
              <li><a href="#"><i class="fa fa-search"></i></a></li>
              <li><a href="#"><i class="fa fa-link"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Video",
  props: {
    Display: Boolean,
  }
}
</script>

<style scoped>
@import url("../assets/css/reset.css");
@import url("../assets/css/bootstrap-grid.min.css");
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css");
.origin {
  padding: 2em 0;
}
:root {
  --color_1: #fff;
  --main-color: #1dd1a1;
}
.box {
  font-family: 'Niramit', sans-serif;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 10px 10px 5px #888888;
}
.box:before,
.box:after,
.box-content:before,
.box-content:after {
  content: '';
  background: linear-gradient(transparent,rgba(67,101,237,0.9));
  height: 100%;
  width: 25%;
  transform: translateY(-100%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  transition: all 0.3s;
}
.box:hover:before,
.box:hover:after,
.box:hover .box-content:before,
.box:hover .box-content:after{
  transform: translateY(0);
}
.box:after{ left: 25%; }
.box .box-content:before{ left: 50%; }
.box .box-content:after{ left: 75%; }
.box:hover:before{ transition-delay: 0.225s; }
.box:hover:after{ transition-delay: 0.075s; }
.box:hover .box-content:before{ transition-delay: 0.15s; }
.box:hover .box-content:after{ transition-delay: 0s; }
.box img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease 0s;
}
.box:hover img{ filter: grayscale(100%); }
.box .box-content{
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.2s;
}
.content{
  width: 100%;
  padding: 7px 0;
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: -30px;
  z-index: 2;
  transition: all 0.3s ease 0.1s;
}
.box:hover .content {
  opacity: 1;
  bottom: 5px;
}
.box .title{
  color:#fff;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}
.box .post{
  color: var(--main-color);
  font-size: 16px;
  font-style: italic;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: block;
}
.box .icon{
  padding: 0;
  margin: 0;
  list-style: none;
  transform: translateX(-50%);
  position: absolute;
  top: 15px;
  right: -10px;
  z-index: 2;
  transition: all 0.5s ease 0.3s;
}
.box .icon li{
  opacity: 0;
  transform: scale(0) rotate(360deg);
  transition: all 400ms;
}
.box:hover .icon li{
  opacity: 1;
  transform: scale(1) rotate(0);
}
.box .icon li a{
  color: var(--color_1);
  background-color: var(--main-color);
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  width: 40px;
  margin-bottom: 10px;
  border-radius: 50%;
  display: block;
  position: relative;
  transition: all 0.3s;
}
.box .icon li a:hover{
  text-decoration: none;
  color: var(--main-color);
  background-color: var(--color_1);
  border-radius: 0 20px 0 20px;
}
[class*="col-"] {
  padding: 10px;
}

@media only screen and (min-width:479px) {
  .box .title{ font-size: 20px; }
}
@media only screen and (min-width:990px) {
  .box { margin-bottom: 30px; }
  [class*="col-"] { padding: 10px; }
}
@media only screen and (min-width:1900px) {
  /* 1920 x 1080 */
  [class*="col-"] {
    padding: 20px;
  }
  .container { width: 1800px; }
}
@media only screen and (min-width:2500px) {
  /* 2560 x 1440 */
  [class*="col-"] {
    padding: 30px;
  }
  .container { width: 2400px; }
}
@media only screen and (min-width:3800px) {
  /* 3840 x 2160 */
  [class*="col-"] {
    padding: 30px;
  }
  .container { width: 3000px; }
}

.upIn {
  animation: upIn 1s ease;
}
.upOut {
  animation: upOut 1s ease;
  animation-fill-mode: forwards;
}
.downIn {
  animation: downIn 1s ease;
}
.downOut {
  animation: downOut 1s ease;
  animation-fill-mode: forwards;
}
@keyframes upIn {
  from {
    transform: translateY(120%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes downIn {
  from {
    transform: translateY(-120%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes upOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(120%);
    opacity: 0;
  }
}
@keyframes downOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-120%);
    opacity: 0;
  }
}
</style>