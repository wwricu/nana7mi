<template>
  <div id="image1" class="fixed_image" :style="{'background-position-y':positionY+'px'}"></div>
  <div id="mask1" class="opacity_mask"></div>
  <Cover></Cover>
  <DividerPair id="divider1" :title="'原创作品'" :opacity="scrollTop/(windowHeight-100)"></DividerPair>
  <div id="bar1">
    <Card id="card1"></Card>
    <!--el-card class="box-card"></el-card-->
  </div>
  <div id="image2" class="fixed_image" :style="{'background-position-y':positionY+540+'px'}"></div>
  <DividerPair id="divider2" :title="'二创作品'" :opacity="(scrollTop-1780+windowHeight)/(windowHeight-100)"></DividerPair>
  <div id="carousel_block_1" class="carousel_block">
    <el-carousel :interval="5000" type="card" height="500px" pause-on-hover=true>
      <el-carousel-item v-for="(origin_bv, index) in origin_bv_list" :key="index" @click="goBV(origin_bv)">
<!--        <iframe class="origin_video" @mouseenter="originMouseEnter" @mouseout="originMouseOut" :src='["//player.bilibili.com/player.html?bvid=" + origin_bv]' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>-->
      </el-carousel-item>
    </el-carousel>
  </div>
  <div id="image3" class="fixed_image" :style="{'background-position-y':positionY+1080+'px'}"></div>
</template>

<script>
import Card from "@/components/Card";
import Cover from "@/components/Cover";
import DividerPair from "@/components/DividerPair";

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
      ratio: 0.5,
      positionY: 0,
      Y: 0,
      scrollTop: 0,
      windowHeight: 0
    }
  },
  methods: {
    originMouseEnter() {
      this.origin_active = true
    },
    originMouseOut() {
      this.origin_active = false
    },
    goBV(BV) {
      window.open("https://www.bilibili.com/video/" + BV);
    },
    handleScroll: function() {
      this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      this.positionY = this.Y - this.scrollTop * this.ratio; // 原始高度-滚动距离*视差系数
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //创建滚动监听，页面滚动回调handleScroll方法
    this.Y = document.getElementById("image1").offsetTop;// * this.ratio
  },
  components: {
    Cover,
    DividerPair,
    Card
  }
}
</script>

<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  background-image: url("./assets/image/BV1vJ411B7ng.jpg");
  background-color: rgba(0,0,0,0.6);
  background-size: cover;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  background-image: url("./assets/image/BV1Wq4y1g7SW.jpg");
  background-color: rgba(0,0,0,0.6);
  background-size: cover;
}

.el-carousel__item:nth-child(3) {
  background-image: url("./assets/image/BV18q4y1z7Vv.jpg");
  background-color: rgba(0,0,0,0.6);
}
.el-carousel__item:nth-child(4) {
  background-image: url("./assets/image/BV1yf4y137XH.jpg");
  background-color: rgba(0,0,0,0.6);
}
.el-carousel__item:nth-child(5) {
  background-image: url("./assets/image/BV1y4411P7Wg.jpg");
  background-color: rgba(0,0,0,0.6);
}
.box-card {
  /*background-color: #545c64;*/
  background-color: rgba(84,92,100,0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 500px;
  border-color: black;
}

.origin_video {
  height: 240px;
  width: 480px;
}
#image1 {
  background-image: url("./assets/image/background.jpg");
  height: 1080px;
  top: 0;
}

#cover {
  position: absolute;
  z-index: 3;
  top: 250px;
  left: 50%;
  transform:translate(-50%);
}
#divider1 {
  position: absolute;
  top: 800px;
  left: 50%;
  width: 80%;
  transform:translate(-50%);
  z-index: 1;
  color: white;
}
#carousel_block_1 {
  position: absolute;
  height: 300px;
  top: 1000px;
  /*width: 50%;*/
}
#image2 {
  background-image: url("./assets/image/background4.jpg");
  height: 900px;
  top: 1080px;
}
#divider2 {
  position: absolute;
  top: 1780px;
  left: 50%;
  width: 80%;
  transform:translate(-50%);
  z-index: 1;
}
#bar1 {
  width: 100%;
  top: 1980px;
  height: 300px;
  left: 0;
  position: absolute;
  z-index: 2;
  background-color: rgba(210,210,210,1);
  /*background-color: #545c64;*/
}
#image3 {
  background-image: url("./assets/image/Nana7mi_background.jpg");
  height: 1080px;
  top: 1980px;
}
#mask1 {
  top: 0;
  height: 3060px;
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
.opacity_mask {
  position: absolute;
  left: 0;
  opacity: 0.55;
  -moz-opacity: 0.55;
  width: 100%;
  z-index: -1;
  background-color: #000;
}
.carousel_block {
  width: 100%;
  left: 50%;
  transform:translate(-50%);
  z-index: 3;
  background-color: rgba(0,0,0,0);
}
</style>

<style>
body {}
</style>

