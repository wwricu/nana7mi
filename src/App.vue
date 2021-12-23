<template>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <div id="image1"  :class="{'upOut':coverInit==true}"></div>
  <div id="mask1" @click="initCover()" :class="{'maskUpOut':coverInit==true}">原来的首页</div>
  <Home v-if="coverInit" :Display="scrollTop <= 50"></Home>
  <Video v-if="coverInit" id="origin" :Display="scrollTop > originShow && scrollTop < originHide"></Video>
  <div v-if="coverInit" id="image2" class="fixed_image" :style="{'background-position-y':positionY+'rem'}"></div>
  <Video v-if="coverInit" id="amateur" :Display="scrollTop > amateurShow && scrollTop < amateurHide"></Video>
  <div v-if="coverInit" id="image3" class="fixed_image" :style="{'background-position-y':positionY+image3Pos+'rem'}"></div>
  <Footer v-if="coverInit" ></Footer>
</template>

<script>
import Home from "@/components/Home";
import Video from "@/components/Video";
import Footer from "@/components/Footer";

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
      docHeight: 0,
      fontSize: window.innerWidth / 100,
      originShow: 90, // rem
      originHide: 160, // rem
      amateurShow: 210, // rem
      amateurHide: 290, // rem
      image3Pos: 220
    }
  },
  methods: {
    goBV(BV) {
      window.open("https://www.bilibili.com/video/" + BV);
    },
    handleScroll: function() {
      this.scrollTop =
          (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop) / this.fontSize; // rem
      this.Y = document.getElementById("image2").offsetTop / this.fontSize;// * this.ratio;

      this.positionY = this.Y - this.scrollTop * this.ratio; // 原始高度-滚动距离*视差系数
      // this.docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
      if (window.innerHeight > 1600 && window.innerWidth < 1200) {
        this.originShow = 50; // rem
        this.originHide = 130; // rem
        this.amateurShow = 130; // rem
        this.amateurHide = 210; // rem
        this.image3Pos = 170;
      }
    },
    handleResize() {
      this.fontSize = window.innerHeight / 100; // 1vw

    },
    initCover() {
      this.coverInit = true;
      this.Y = document.getElementById("image2").offsetTop;// * this.ratio;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //创建滚动监听，页面滚动回调handleScroll方法
    window.addEventListener('resize', this.handleResize);
    // this.windowHeight = document.documentElement.clientHeight;
    this.handleResize();
    this.handleScroll();
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
  font-size: 3.125rem;
  padding-top: 18.75rem;
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
  height: 40rem;
  top: 100rem;
}
#origin {
  position: absolute;
  top: 160rem;
  /* 1800 - (1080 + 480) == 240 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
#image3 {
  background-image: url("./assets/image/Nana7mi_background.jpg");
  height: 40rem;
  top: 210rem;
  /* 1800 + 209 + 240 == 2250 */
}
#amateur {
  position: absolute;
  top: 280rem;
  /* 2350 + 540 + 240 == 3000 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
Footer {
  position: absolute;
  top: 340rem;
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
@media only screen and (min-height:1400px) and (max-width: 1200px) {
  /* portable device */
  #image2 {
    height: 10rem;
    top: 100rem;
  }
  #origin {
    top: 130rem;
  }
  #image3 {
    height: 10rem;
    top: 190rem;
  }
  #amateur {
    top: 210rem;
  }
  Footer {
    top: 250rem;
  }
}
</style>
<style>
html { font-size: 1vh; }
</style>

