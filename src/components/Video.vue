<template>
<div class="video" :class="{'plainIn':Display===true,'plainOut':Display===false}">
<!--  <el-divider content-position="left" style="font-size: 5rem;">{{ title_text }}</el-divider>-->
  <div id="title">{{ title_text }}</div>
  <el-divider>
    <el-icon><star-filled/></el-icon>
  </el-divider>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-lg-3"
           v-for="(video,i) in video_lists[video_index]" :key="i"
           @click="showPlayer(i)"
      >
        <div class="box" :class="{'disable_animation':i === active_player}">
          <iframe :id="'player'+i" v-if="i === active_player"
                  :src="linkPrefix + video.bv"
                  scrolling="no" border="0" frameborder="no"
                  class="box-content"
                  framespacing="0" allowfullscreen="true">
          </iframe>
          <img :src="video.img" v-show="i !== active_player" alt="">
          <img src="../assets/image/placeholder.png" class="placeholder" v-show="i === active_player" alt="">
          <div class="box-content" v-show="i !== active_player">
            <div class="content">
              <span class="post">{{ video.post }}</span>
              <h3 class="title">{{ video.title }}</h3>
            </div>
            <ul class="icon">
<!--              <li><a href="#"><i class="fa fa-search"></i></a></li>-->
              <li>
                <a :href="video_prefix + video.bv" target="_blank">
                  <i class="fa fa-link"></i>
                </a>
              </li>
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
    title_text: String,
    video_index: Number,
  },
  methods: {
    showPlayer(index) {
      this.active_player=index;
    },
    handleClick(e) {
      if (e.target.className.indexOf('box-content') === -1
       && e.target.className.indexOf('content') === -1
       && e.target.className.indexOf('placeholder') === -1
       && e.target.className.indexOf('box') === -1) {
        /* click out of box */
        this.active_player=null;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClick);
  },
  data() {
    return {
      linkPrefix: '//player.bilibili.com/player.html?high_quality=1&bvid=',
      active_player: Number,
      video_lists: [
        [
          {
            // av: '78090377',
            bv:'BV1vJ411B7ng',
            // cv:'133606284',
            img: require('../assets/image/BV1vJ411B7ng.jpg'),
            title: "【七海】七海的偶像宣言／私、アイドル宣言【手书PV】",
            post: ""
          },
          {
            // av: '592090979',
            bv:'BV18q4y1z7Vv',
            // cv:'454263865',
            img: require('../assets/image/BV18q4y1z7Vv.jpg'),
            title: "I wanna kill you",
            post: ""
          },
          {
            // av: '292364428',
            bv:'BV1yf4y137XH',
            // cv:'388755989',
            img: require('../assets/image/BV1yf4y137XH.jpg'),
            title: "【七海】我。/Myself -Miwake-【原创曲】",
            post: ""
          },
          {
            // av: '55477079',
            bv:'BV1y4411P7Wg',
            // cv:'96997789',
            img: require('../assets/image/BV1y4411P7Wg.jpg'),
            title: "【VUP七海】震惊！！鲨鱼居然会说话？！",
            post: ""
          },
        ],
        [
          {
            // av: '376524564',
            bv:'BV1wo4y1X7Tk',
            // cv:'365010431',
            img: require('../assets/image/BV1wo4y1X7Tk.jpg'),
            title: "【海子姐】ybb小火车",
            post: "作者: dRa核桃"
          },
          {
            // av: '334616725',
            bv:'BV1gA411P7ir',
            // cv:'387919612',
            img: require('../assets/image/BV1gA411P7ir.jpg'),
            title: "Ring Ring Ring",
            post: "作者: 沈默沈默"
          },
          {
            // av: '250375378',
            bv:'BV1cv411w7ky',
            // cv:'406863730',
            img: require('../assets/image/BV1cv411w7ky.jpg'),
            title: "【棍海】猴鲨爱情故事（群青 cover:YOASOBI）",
            post: "作者: 四方三画"
          },
          {
            // av: '805760588',
            bv:'BV1t34y1D7SX',
            // cv:'418850327',
            img: require('../assets/image/BV1t34y1D7SX.jpg'),
            title: "shape of ybb",
            post: "作者: AT-15A"
          },
        ]
    ],
  }
  }
}
</script>

<style scoped>
@import url("../assets/css/reset.css");
@import url("../assets/css/bootstrap-grid.min.css");
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css");
#title {
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
}
.placeholder {
  position: relative; /* Placeholder covers video players in Chrome */
  z-index: -999;
}
.video {
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
  border: 2px solid var(--el-border-color-base);
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
}
.box:hover {
  cursor: pointer;
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
.box:hover .box-content:after {
  transform: translateY(0);
}
.disable_animation:hover:before,
.disable_animation:hover:after,
.disable_animation:hover .box-content:before,
.disable_animation:hover .box-content:after {
  transform: translateY(-100%);
}
.box:after{ left: 25%; }
.box .box-content:before { left: 50%; }
.box .box-content:after { left: 75%; }
.box:hover:before { transition-delay: 0.225s; }
.box:hover:after { transition-delay: 0.075s; }
.box:hover .box-content:before { transition-delay: 0.15s; }
.box:hover .box-content:after { transition-delay: 0s; }
.box img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease 0s;
}
.box:hover img { filter: grayscale(100%); }
.box .box-content {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.2s;
}
.content {
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
.box .title {
  color:#fff;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}
.box .post {
  color: var(--main-color);
  font-size: 16px;
  font-style: italic;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: block;
}
.box .icon {
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
.box .icon li {
  opacity: 0;
  transform: scale(0) rotate(360deg);
  transition: all 400ms;
}
.box:hover .icon li {
  opacity: 1;
  transform: scale(1) rotate(0);
}
.box .icon li a {
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
.box .icon li a:hover {
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
</style>
<style>
/* animations */
.plainIn {
  animation: plainIn 1s ease;
}
.plainOut {
  animation: plainOut 1s ease;
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
    display: none;
  }
}
@keyframes plainIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes plainOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>