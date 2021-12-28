<template>
  <Cover id="cover" @click="initPage($event)" @tap="initPage($event)"
         :class="{'upOut':(coverInit===true && contentInit===true),
                  'upIn':(coverInit===false && firstInit===true)}"
  ></Cover>
  <TopMenu></TopMenu>
  <Background
      :colorStyle="(scrollTop+clientHeight>scrollHeight?3:scrollTop>backgroundStyle2?2:scrollTop>backgroundStyle1?1:0)"
  ></Background>
  <Home v-if="contentInit" :ifDisplay="(scrollTop <= 50)"></Home>
  <Video v-if="contentInit" id="origin"
         :ifDisplay="(scrollTop > originShow && scrollTop < originHide)"
         :titleText="'原创作品'"
         :videoIndex="0"
  ></Video>
  <div v-if="contentInit" id="bar1" class="fixed_image"
       :style="{'background-position-y':positionY+'rem'}"
  ></div>
  <Video v-if="contentInit" id="amateur"
         :ifDisplay="(scrollTop>amateurShow && scrollTop+clientHeight<scrollHeight)"
         :titleText="'二创作品'"
         :videoIndex="1"
  ></Video>
  <div v-if="contentInit" id="bar2" class="fixed_image"
       :style="{'background-position-y':positionY+bar2Offset+'rem'}"
  ></div>
  <el-backtop :visibility-height=-1 @click="deinitPage" @tap="deinitPage"/>
  <Footer v-if="contentInit" ></Footer>
</template>

<script>
import Cover from "@/components/Cover";
import Home from "@/components/Home";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
import Background from "@/components/Background";

export default {
  name: 'App',
  data() {
    return {
      firstInit: false, // do not play cover in animation before first init
      coverInit: false, // control whether the cover is shown
      contentInit: false, // control whether the content is shown
      ratio: 2,
      positionY: 0,
      Y: 0,
      scrollTop: 0,
      clientHeight: 0,
      scrollHeight: 0,
      fontSize: window.innerWidth / 100,

      bar1Top: '100vh',
      bar1Height: '40vh',
      originTop: '150vh',
      bar2Top: '210vh',
      bar2Height: '40vh',
      amateurTop: '260vh',
      footerTop: '300vh',

      originShow: 90, // rem
      originHide: 160, // rem
      amateurShow: 210, // rem
      amateurHide: 290, // rem
      bar1Offset: 0,
      bar2Offset: 220,
      footOffset: 0,

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

      this.Y = document.getElementById("bar1").offsetTop / this.fontSize;// * this.ratio;
      this.positionY = this.Y - this.scrollTop * this.ratio;
    },
    handleResize() {
      this.fontSize = Math.min(window.innerHeight, window.innerWidth) / 100; // 1vmin

      if (window.innerHeight > 428 && window.innerWidth < 429) {
        /* Portrait Smartphones with one column video*/
        /* Disable animation on smartphones */
        this.ratio = 2;
        this.originShow = -1;
        this.originHide = 1000;
        this.amateurShow = -1;
        this.amateurHide = 1000;
        this.bar2Offset = 270;
        // this.backgroundStyle1 = 80; // Same under all resolutions
        this.backgroundStyle2 = -1; // Enforce style2 background on smartphones

        this.bar1Top = '80vh';
        this.bar1Height = '15vh';
        this.originTop = '70vh';
        this.bar2Top = '160vh';
        this.bar2Height = '15vh';
        this.amateurTop = '160vh';
        this.footerTop = '250vh';
      } else if (window.innerHeight > 1023 && window.innerWidth < 1025) {
        /*
          Portrait iPad
          iPad & iPad mini: 768x1024,
          iPad Pro: 834x1112 1024x1366,
        */
        this.ratio = 2;
        this.originShow = 50;
        this.originHide = 130;
        this.amateurShow = 130;
        this.amateurHide = 210;
        this.bar1Offset = 0;
        this.bar2Offset = 200;
        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 190;

        this.bar1Top = '80vh';
        this.bar1Height = '15vh';
        this.originTop = '100vh';
        this.bar2Top = '160vh';
        this.bar2Height = '15vh';
        this.amateurTop = '180vh';
        this.footerTop = '240vh';
      } else if (window.innerWidth < 768) {
        /* small screen with one column video */
        /* Disable animation on small screen devices */
        this.ratio = 2;
        this.originShow = -1;
        this.originHide = 1000;
        this.amateurShow = -1;
        this.amateurHide = 1000;
        this.bar1Offset = 0;
        this.bar2Offset = 700;

        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 260;
      } else if (window.innerWidth < 1200) {
        /* medium screen and landscape iPad with two column video */
        this.ratio = 2;
        this.originShow = 50;
        this.originHide = 250;
        this.amateurShow = 250;
        this.amateurHide = 400;
        this.bar1Offset = 0;
        this.bar2Offset = 380;
        // this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 280;

        this.bar1Top = '100vh';
        this.bar1Height = '40vh';
        this.originTop = '150vh';
        this.bar2Top = '280vh';
        this.bar2Height = '40vh';
        this.amateurTop = '330vh';
        this.footerTop = '440vh';
        if (navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/)) {
          // iOS background-attachment compatibility
          this.ratio = 1;
        }
      } else {
        /* Ordinary resolution (large screen) */
        this.ratio = 2;
        this.originShow = 80;
        this.originHide = 170;
        this.amateurShow = 190;
        this.amateurHide = 280;
        this.bar1Offset = 0;
        this.bar2Offset = 220;
        this.backgroundStyle1 = 80;
        this.backgroundStyle2 = 190;

        this.bar1Top = '100vh';
        this.bar1Height = '40vh';
        this.originTop = '150vh';
        this.bar2Top = '210vh';
        this.bar2Height = '40vh';
        this.amateurTop = '260vh';
        this.footerTop = '300vh';
      }
    },
    initPage(e) {
      // console.log(e.target.className.animVal.indexOf('cover_icon'));
      // for (let i in e.target) {
      //   console.log(i);
      // }
      console.log(e.target.getAttribute("class"));

      if ( e.target.getAttribute("class").indexOf('cover_icon') !== -1
        || e.target.getAttribute("class").indexOf('navigation') === -1
        && e.target.getAttribute("class").indexOf('blog-button') === -1
        && e.target.getAttribute("class").indexOf('profilepic') === -1) {
        /* click out of links and avatar */
        this.firstInit = true;
        this.coverInit = true;
        this.contentInit = true;
        this.Y = document.getElementById("bar1").offsetTop;// * this.ratio;
      }
    },
    deinitCover() {
      this.coverInit = false;
    },
    deinitContent() {
      this.contentInit = false;
    },
    deinitPage() {
      let delay = this.scrollTop * this.fontSize * 0.75;
      setTimeout(this.deinitCover, delay);
      setTimeout(this.deinitContent, delay + 1000 );
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //创建滚动监听，页面滚动回调handleScroll方法
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    // this.handleScroll(); // this caused bugs in menu
  },
  components: {
    Cover,
    Footer,
    Home,
    Video,
    TopMenu,
    Background
  }
}
</script>

<style scoped>
/*vars="{ bar1Top, bar1Height, originTop, bar2Top, bar2Height, amateurTop, footerTop }"*/
#cover {
  z-index: 998;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("./assets/image/cover/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
}
#bar1 {
  background-image: url("./assets/image/bar1.jpg");
  /*height: 40vh;*/
  /*top: 100vh;*/
  top: v-bind(bar1Top);
  height: v-bind(bar1Height);
  border: 5px #000;
}
#origin {
  position: absolute;
  z-index: 1;
  /*top: 150vh;*/
  top: v-bind(originTop);
  left: 50%;
  transform: translateX(-50%);
}
#bar2 {
  background-image: url("./assets/image/bar2.jpg");
  /*height: 40vh;*/
  /*top: 210vh;*/
  top: v-bind(bar2Top);
  height: v-bind(bar2Height);
  border: 5px #000;
}
#amateur {
  position: absolute;
  /*top: 260vh;*/
  top: v-bind(amateurTop);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
Footer {
  position: absolute;
  /*top: 300vh;*/
  top: v-bind(footerTop);
  width: 100%;
}
.fixed_image {
  position: absolute;
  background: no-repeat fixed center 0;
  /*background-size: cover;*/
  background-size: 100% auto;
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
.upIn {
  animation: upIn 1s ease;
  animation-fill-mode: forwards;
}
.upOut {
  animation: upOut 1s ease;
  animation-fill-mode: forwards;
}
@keyframes upIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
    display: none;
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
    transform: translateY(-100%);
    opacity: 0;
    display: none;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 768px) {
  /* medium screen and landscape iPad with two column video
  width: [768~1200] */
  .fixed_image {
    background-size: 120% auto;
  }
}
@media only screen and (max-width: 767px) {
  /* zooming in screens and small screens with one column video
  width: [0, 768) */
  #bar2 {
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
  /* Portrait iPad */
  .fixed_image {
    background-size: 120% auto;
  }
}
@media only screen and (max-width: 429px) and (min-height: 428px) {
  /* Smartphones */
  #bar1 {
    display: none;
  }
  #bar2 {
    display: none;
  }
}
</style>
<style>
html {
  font-size: 1vmin;
  width:100%;
  overflow-x:hidden;
}
body {
  background: url("./assets/image/background.png") fixed;
  background-size: cover;
}
</style>

