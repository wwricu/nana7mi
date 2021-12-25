<template>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <div id="image1"  :class="{'upOut':coverInit==true}"></div>
  <div id="mask1" @click="initCover()" :class="{'maskUpOut':coverInit==true}">原来的首页</div>
  <TopMenu></TopMenu>
  <Home v-if="coverInit" :Display="scrollTop <= 50"></Home>
<!--  <div id="background1"></div>-->
<!--  <ScrollBar id="scroll1" v-if="coverInit" :activeStep="scrollStep"></ScrollBar>-->
  <Video v-if="coverInit" id="origin"
         :Display="scrollTop > originShow && scrollTop < originHide"
         :title_text="'原创作品'"
         :video_index="0"
  ></Video>
  <div v-if="coverInit" id="image2" class="fixed_image"
       :style="{'background-position-y':positionY+'rem'}"
  ></div>
  <Video v-if="coverInit" id="amateur"
         :Display="scrollTop > amateurShow && scrollTop < amateurHide"
         :title_text="'二创作品'"
         :video_index="1"
  ></Video>
  <div v-if="coverInit" id="image3" class="fixed_image"
       :style="{'background-position-y':positionY+image3Pos+'rem'}"
  ></div>
  <Footer v-if="coverInit" ></Footer>
</template>

<script>
import Home from "@/components/Home";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
// import ScrollBar from "@/components/ScrollBar";

export default {
  name: 'App',
  data() {
    return {
      origin_active: false,
      coverInit: false,
      scrollStep: 1,
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
      if (window.innerHeight > 1600 && window.innerWidth < 1200) {
        /* portable device with two column video */
        this.originShow = 50; // rem
        this.originHide = 130; // rem
        this.amateurShow = 130; // rem
        this.amateurHide = 210; // rem
        this.image3Pos = 170;
      } else if (window.innerWidth < 1200) {
        /* desktop device with two column video */
        this.originShow = 50; // rem
        this.originHide = 250; // rem
        this.amateurShow = 250; // rem
        this.amateurHide = 400; // rem
        this.image3Pos = 400;
      } else {
        this.originShow = 90; // rem
        this.originHide = 160; // rem
        this.amateurShow = 210; // rem
        this.amateurHide = 290; // rem
        this.image3Pos = 220;
      }

      if (this.scrollTop >= this.amateurShow) {
        this.scrollStep = 2;
      } else {
        this.scrollStep = 1;
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
    // this.handleScroll(); // this caused bugs in menu
  },
  updated() {

  },
  components: {
    Footer,
    Home,
    Video,
    TopMenu,
    // ScrollBar
  }
}
</script>

<style scoped>
#image1 {
  position: absolute;
  z-index: 998;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("./assets/image/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
}
#mask1 {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  -moz-opacity: 0.4;
  font-size: 3.125rem;
  padding-top: 18.75rem;
  text-align: center;
  color: white;
  background-color: #000;
}
TopMenu {
  box-shadow: 10px 10px 5px #888888;
}
#background1 {
  position: absolute;
  z-index: 5;
  top: 0;
  height: 105rem;
  width: 100%;
  background-color: black;
  opacity: 0.8;
}
#image2 {
  background-image: url("./assets/image/background3.jpg");
  height: 40rem;
  top: 100rem;
  border: 5px #000;
}
#scroll1 {
  position: absolute;
  top: 160rem;
  left: 10%;
  z-index: -2;
}
#origin {
  position: absolute;
  z-index: 1;
  top: 160rem;
  /* 1800 - (1080 + 480) == 240 */
  left: 50%;
  transform: translateX(-50%);
}
#image3 {
  background-image: url("./assets/image/Nana7mi_background.jpg");
  height: 40rem;
  top: 210rem;
  border: 5px #000;
}
#amateur {
  position: absolute;
  top: 280rem;
  /* 2350 + 540 + 240 == 3000 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
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
  z-index: -1;
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

@media only screen and (max-width: 1200px) {
  /* desktop device with 2 column video */
  #image3 {
    height: 50rem;
    top: 300rem;
  }
  #amateur {
    top: 350rem;
  }
  Footer {
    top: 500rem;
  }
}
@media only screen and (min-height:1600px) and (max-width: 1200px) {
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
body {
  background: url("assets/image/bg.009bdf28.png");
  background-size: cover;
}
</style>

