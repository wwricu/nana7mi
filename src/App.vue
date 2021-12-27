<template>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <div id="image1"  :class="{'upOut':coverInit===true}"></div>
  <div id="mask1" @click="initCover" @tap="initCover" :class="{'maskUpOut':coverInit===true}">原来的首页</div>
  <TopMenu></TopMenu>
<!--  <iframe src="//player.bilibili.com/player.html?aid=78090377&bvid=BV1vJ411B7ng&cid=133606284&page=1"-->
<!--          scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>-->
  <Background
      :color_style="(scrollTop+clientHeight>scrollHeight?3:scrollTop>backgroundStyle2?2:scrollTop>backgroundStyle1?1:0)"
  ></Background>
  <Home v-if="coverInit" :Display="(scrollTop <= 50)"></Home>
  <Video v-if="coverInit" id="origin"
         :Display="(scrollTop > originShow && scrollTop < originHide)"
         :titleText="'原创作品'"
         :videoIndex="0"
  ></Video>
  <div v-if="coverInit" id="image2" class="fixed_image"
       :style="{'background-position-y':positionY+'rem'}"
  ></div>
  <Video v-if="coverInit" id="amateur"
         :Display="(scrollTop>amateurShow && scrollTop+clientHeight<scrollHeight)"
         :titleText="'二创作品'"
         :videoIndex="1"
  ></Video>
  <div v-if="coverInit" id="image3" class="fixed_image"
       :style="{'background-position-y':positionY+image3Pos+'rem'}"
  ></div>
  <el-backtop :visibility-height="originHide * fontSize"/>
  <Footer v-if="coverInit" ></Footer>
</template>

<script>
import Home from "@/components/Home";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
import Background from "@/components/Background";

export default {
  name: 'App',
  data() {
    return {
      coverInit: false,
      ratio: 2,
      positionY: 0,
      Y: 0,
      scrollTop: 0,
      clientHeight: 0,
      scrollHeight: 0,
      fontSize: window.innerWidth / 100,
      originShow: 90, // rem
      originHide: 160, // rem
      amateurShow: 210, // rem
      amateurHide: 290, // rem
      image3Pos: 220,
      hidePlayer: true,

      backgroundStyle1: 75, // rem
      backgroundStyle2: 190, // rem
    }
  },
  methods: {
    handleScroll: function() {
      this.scrollTop = (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop) / this.fontSize; // rem
      this.clientHeight = document.documentElement.clientHeight / this.fontSize; // visible height
      this.scrollHeight = Math.floor(document.documentElement.scrollHeight / this.fontSize); // total height

      this.Y = document.getElementById("image2").offsetTop / this.fontSize;// * this.ratio;
      this.positionY = this.Y - this.scrollTop * this.ratio;
    },
    handleResize() {
      this.fontSize = Math.min(window.innerHeight, window.innerWidth) / 100; // 1vmin

      if (window.innerHeight > 639 && window.innerWidth < 429) {
        /* Portable device with one column video (Smartphones) */
        /* Disable animation on smartphones */
        this.originShow = -1;
        this.originHide = 1000;
        this.amateurShow = -1;
        this.amateurHide = 1000;
        this.image3Pos = 270;

        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = -1; // Enforce style2 background on smartphones
      } else if (window.innerHeight > 1023 && window.innerWidth < 1025) {
        /*
          Portable device with two column video (iPad)
          iPad & iPad mini: 768x1024,
          iPad Pro: 834x1112 1024x1366,
        */
        this.originShow = 50;
        this.originHide = 130;
        this.amateurShow = 130;
        this.amateurHide = 210;
        this.image3Pos = 220;
        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 190;
      } else if (window.innerWidth < 768) {
        /* Desktop device with one column video (small screen) */
        /* Disable animation on small screen devices */
        this.originShow = -1;
        this.originHide = 1000;
        this.amateurShow = -1;
        this.amateurHide = 1000;
        this.image3Pos = 700;

        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 260;
      } else if (window.innerWidth < 1200) {
        /* Desktop device with two column video (medium screen) */
        this.originShow = 50;
        this.originHide = 250;
        this.amateurShow = 250;
        this.amateurHide = 400;
        this.image3Pos = 400;

        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 280;
      } else {
        /* Ordinary resolution (large screen) */
        this.originShow = 80; // rem
        this.originHide = 170;
        this.amateurShow = 190;
        this.amateurHide = 280;
        this.image3Pos = 220;

        this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 190;
      }
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
  components: {
    Footer,
    Home,
    Video,
    TopMenu,
    // JumpLetters,
    Background
  }
}
</script>

<style scoped>
#image1 {
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
#image2 {
  background-image: url("./assets/image/background3.jpg");
  height: 40rem;
  top: 100rem;
  border: 5px #000;
}
#origin {
  position: absolute;
  z-index: 1;
  top: 150rem;
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
  top: 260rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
Footer {
  position: absolute;
  top: 300rem;
  width: 100%;
}
.fixed_image {
  position: absolute;
  background: no-repeat fixed center 0;
  background-size: cover;
  left: 0;
  width: 100%;
  z-index: 1;
  /*transform: translateZ(999px);*/
  /*transform: translateZ(100px); !* For iOS compatibility *!*/
  /*-webkit-transform: translateZ(1000px);!* Safari & Chrome *!*/
  /*-moz-transform: translateZ(-10px);!* Firefox *!*/
  /*-ms-transform: translateZ(-10px);!* IE 9 *!*/
  /*-o-transform: translateZ(-10px);!* Opera *!*/
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
  /* desktop device with 2 column video (medium screen) */
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
@media only screen and (max-width: 767px) {
  /* desktop device with 1 column video (small screen) */
  #image3 {
    height: 50rem;
    top: 450rem;
  }
  #amateur {
    top: 520rem;
  }
  Footer {
    top: 820rem;
  }
}
@media only screen and (min-height:1023px) and (max-width:1025px) {
  /* iPad */
  #image2 {
    height: 20rem;
    top: 100rem;
  }
  #origin {
    top: 130rem;
  }
  #image3 {
    top: 220rem;
    height: 20rem;
  }
  #amateur {
    top: 250rem;
  }
  Footer {
    top: 330rem;
  }
}
@media only screen and (max-width: 429px) and (min-height: 639px) {
  /* Smartphones */
  #image2 {
    display: none;
  }
  #image3 {
    display: none;
  }
  #origin {
    top: 120rem;
  }
  #amateur {
    top: 280rem;
  }
  Footer {
    top: 450rem;
  }
}
</style>
<style>
html {
  /*-webkit-overflow-scrolling: unset;*/
  font-size: 1vmin;
  width:100%; overflow-x:hidden;
}
body {
  background: url("assets/image/bg.009bdf28.png") fixed;
  background-size: cover;
}
</style>

