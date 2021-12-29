<template>
<div class="video" :class="{'plainIn':ifDisplay===true,
                            'plainOut':ifDisplay===false&&activePlayer==null}">
  <div id="title">{{ titleText }}</div>
  <el-divider>
    <el-icon><star-filled/></el-icon>
  </el-divider>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-lg-3"
           v-for="(video,i) in videoLists[videoIndex]" :key="i"
           @click="showPlayer(i)"
      >
        <div class="box" :class="{'disable_animation':i === activePlayer}">
          <iframe :id="'player'+i" v-if="i === activePlayer"
                  :src="linkPrefix + video.bv"
                  class="box-content" border="0"
                  framespacing="0" allowfullscreen="true">
          </iframe>
          <img :src="'/video_covers/'+video.bv+'.jpg'" v-show="i !== activePlayer" alt="">
          <img src="../assets/image/placeholder.png" class="placeholder" v-show="i === activePlayer" alt="">
          <div class="box-content" v-show="i !== activePlayer">
            <div class="content">
              <span class="post">{{ video.post }}</span>
              <h3 class="title">{{ video.title }}</h3>
            </div>
            <ul class="icon">
<!--              <li><a href="#"><i class="fa fa-search"></i></a></li>-->
              <li>
                <a :href="videoPrefix + video.bv" target="_blank">
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
    ifDisplay: Boolean(false),
    titleText: String,
    videoIndex: null,
  },
  methods: {
    showPlayer(index) {
      this.activePlayer = index;
    },
    handleClick(e) {
      if (e.target.className.indexOf('title') === -1
       && e.target.className.indexOf('post') === -1
       && e.target.className.indexOf('box') === -1
       && e.target.className.indexOf('content') === -1
       && e.target.className.indexOf('placeholder') === -1) {
        /* click out of box */
        this.activePlayer = null;
      }
      console.log('player', this.activePlayer);
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClick);
  },
  data() {
    return {
      linkPrefix: '//player.bilibili.com/player.html?high_quality=1&as_wide=1&bvid=',
      videoPrefix: 'https://www.bilibili.com/video/',
      activePlayer: Number,
      videoLists: [
        [
          {
            // av: '78090377',
            bv:'BV1vJ411B7ng',
            // cv:'133606284',
            title: "【七海】七海的偶像宣言／私、アイドル宣言【手书PV】",
            post: "作者: 七海Nana7mi"
          },
          {
            // av: '592090979',
            bv:'BV18q4y1z7Vv',
            // cv:'454263865',
            title: "I wanna kill you",
            post: "作者: 七海Nana7mi"
          },
          {
            // av: '292364428',
            bv:'BV1yf4y137XH',
            // cv:'388755989',
            title: "【七海】我。/Myself -Miwake-【原创曲】",
            post: "作者: 七海Nana7mi"
          },
          {
            // av: '55477079',
            bv:'BV1y4411P7Wg',
            // cv:'96997789',
            title: "【VUP七海】震惊！！鲨鱼居然会说话？！",
            post: "作者: 七海Nana7mi"
          },
        ],
        [
          {
            // av: '376524564',
            bv:'BV1wo4y1X7Tk',
            // cv:'365010431',
            title: "【海子姐】ybb小火车",
            post: "作者: dRa核桃"
          },
          {
            // av: '334616725',
            bv:'BV1gA411P7ir',
            // cv:'387919612',
            title: "Ring Ring Ring",
            post: "作者: 沈默沈默"
          },
          {
            // av: '250375378',
            bv:'BV1cv411w7ky',
            // cv:'406863730',
            title: "【棍海】猴鲨爱情故事（群青 cover:YOASOBI）",
            post: "作者: 四方三画"
          },
          {
            // av: '805760588',
            bv:'BV1t34y1D7SX',
            // cv:'418850327',
            title: "shape of ybb",
            post: "作者: AT-15A"
          },
        ]
    ],
  }
  }
}
</script>

<style>
</style>
<style scoped>
@import url("../assets/css/reset.css");
@import url("../assets/css/bootstrap-grid.min.css");
@import url("../assets/css/font-awesome.min.css");
/* The font-awesome icons cannot be shown unless using unscoped css or @import */
@import url("../assets/css/video.css");
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