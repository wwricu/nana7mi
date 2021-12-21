<template>
  <div id="image1" class="fixed_image" :style="{'background-position-y':positionY+'px'}"></div>
  <div id="mask1" class="opacity_mask"></div>
  <div id="article"></div>
  <div id="image2" class="fixed_image" :style="{'background-position-y':positionY+540+'px'}"></div>
  <!-- ,'top':1080-scrollTop*ratio+'px' ,'top':2160-scrollTop*ratio+'px'-->
  <div id="image3" class="fixed_image" :style="{'background-position-y':positionY+1080+'px'}"></div>
</template>

<script>

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
      ratio: 2,
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
    this.Y = document.getElementById("image1").offsetTop;// * this.ratio;
  },
  components: {
  }
}
</script>

<style scoped>
#image1 {
  background-image: url("./assets/image/background6.jpg");
  height: 1080px;
  top: 0;
}
#article {
  top: 1000px;
  left: 0;
  width: 100%;
  position: absolute;
  height: 400px;
  z-index: 100;
  background-color: white;
}
#image2 {
  background-image: url("./assets/image/background3.jpg");
  height: 1080px;
  top: 1080px;
}
#image3 {
  background-image: url("./assets/image/Nana7mi_background.jpg");
  height: 1080px;
  top: 2160px;
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
</style>

<style>
body {}
</style>

