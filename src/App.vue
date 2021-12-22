<template>
  <div id="image1"  :class="{'upOut':coverInit==true}"></div>
  <div id="mask1" @click="initCover()" :class="{'maskUpOut':coverInit==true}">原来的首页</div>
  <Home v-if="coverInit" :Display="scrollTop <= 200"></Home>
  <Video v-if="coverInit" id="origin" :Display="scrollTop > 1100 && scrollTop < 1900"></Video>
  <div v-if="coverInit" id="image2" class="fixed_image" :style="{'background-position-y':positionY+100+'px'}"></div>
  <Video v-if="coverInit" id="amateur" :Display="docHeight < (windowHeight + scrollTop) && scrollTop > 2300 && scrollTop < 3100"></Video>
  <div v-if="coverInit" id="image3" class="fixed_image" :style="{'background-position-y':positionY+2800+'px'}"></div>
  <Footer v-if="coverInit" ></Footer>
</template>

<script>
import Home from "@/components/Home";
import Video from "@/components/Video";
import Footer from "@/components/footer";

export default {
  name: 'App',
  data() {
    return {
      origin_active: false,
      origin_bv_list: [
        'BV1vJ411B7ng', // 偶像宣言
        'BV1Wq4y1g7SW', // 谁是喝奶王
        'BV18q4y1z7Vv', // I wanna kill u
        'BV1yf4y137XH', // myself
        'BV1y4411P7Wg' // introduction
      ],
      coverInit: false,
      ratio: 2,
      positionY: 0,
      Y: 0,
      scrollTop: 0,
      windowHeight: 0,
      docHeight: 0
    }
  },
  methods: {
    goBV(BV) {
      window.open("https://www.bilibili.com/video/" + BV);
    },
    handleScroll: function() {
      this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      this.Y = document.getElementById("image2").offsetTop;// * this.ratio;
      this.positionY = this.Y - this.scrollTop * this.ratio; // 原始高度-滚动距离*视差系数
      this.docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
      // console.log(this.windowHeight, this.scrollTop, this.docHeight);
    },
    initCover() {
      this.coverInit = true;
      this.Y = document.getElementById("image2").offsetTop;// * this.ratio;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //创建滚动监听，页面滚动回调handleScroll方法
    this.Y = document.getElementById("image2").offsetTop;// * this.ratio;
    this.windowHeight = document.documentElement.clientHeight;
  },
  components: {
    Footer,
    Home,
    Video
  }
}
</script>

<style scoped>
#image1 {
  background-image: url("./assets/image/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 998;
}
#mask1 {
  font-size: 50px;
  padding-top: 300px;
  text-align: center;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0.4;
  -moz-opacity: 0.4;
  width: 100%;
  z-index: 999;
  background-color: #000;
}
#image2 {
  background-image: url("./assets/image/background3.jpg");
  height: 480px;
  top: 1080px;
}
#origin {
  position: absolute;
  top: 1800px; /* 1800 - (1080 + 480) == 240 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
#image3 {
  background-image: url("./assets/image/Nana7mi_background.jpg");
  height: 540px;
  top: 2350px; /* 1800 + 209 + 240 == 2250 */
}
#amateur {
  position: absolute;
  top: 3000px; /* 2350 + 540 + 240 == 3000 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
Footer {
  position: absolute;
  top: 3500px;
  width: 100%;
}
.fixed_image {
  position: absolute;
  background: no-repeat fixed;
  background-size: cover;
  left: 0;
  width: 100%;
  z-index: -2;
}

.upOut {
  animation: upOut 1s ease;
  animation-fill-mode: forwards;
}
@keyframes upOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 1;
  }
}
.maskUpOut {
  animation: maskUpOut 1s ease;
  animation-fill-mode: forwards;
}
@keyframes maskUpOut {
  from {
    transform: translateY(0);
    opacity: 0.4;
  }
  to {
    transform: translateY(-100%);
    opacity: 0.6;
  }
}
</style>
<style>
body {}
</style>

