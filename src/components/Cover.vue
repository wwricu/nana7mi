<template>
  <header id="panel" class="panel-cover">
    <div class="panel-main">
      <div class="panel-main__inner panel-inverted">
        <div class="panel-main__content">
          <div class="ih-item circle effect right_to_left">
            <div class="iUp">
              <a class="blog-button">
                <div class="img"><img src="../assets/image/cover/nana7mi_logo.jpg" alt="img" class="js-avatar profilepic"></div>
                <div class="info">
                  <div class="info-back"><img src="../assets/image/cover/ybb.jpg" alt="img" class="profilepic"></div>
                </div>
              </a>
            </div>
          </div>

          <p class="panel-cover__title panel-title iUp">
            七海Nana7mi<br>非官方站点
          </p>
          <p class="panel-cover__subtitle panel-subtitle iUp">更多内容Coming Soon...</p>
          <hr class="panel-cover__divider iUp" />
          <p id="description" class="panel-cover__description iUp">我真的怀疑有些人闲的程度啊。
            <br>
            <strong>-「海子姐」</strong>
          </p>
          <div class="cover-navigation iUp">
            <div id="nav-container">
              <nav class="cover-navigation--primary">
                <ul class="navigation">
                  <li class="navigation__item">
                    <a href="https://space.nana7mi.com" class="blog-button" target="_blank">个人空间</a>
                  </li>
                  <li class="navigation__item">
                    <a href="https://live.nana7mi.com" class="blog-button" target="_blank">直播间</a>
                  </li>
                  <li class="navigation__item">
                    <a href="https://zh.moegirl.org.cn/七海(虚拟UP主)" class="blog-button" target="_blank">萌娘百科</a>
                  </li>
                </ul>
              </nav>
            </div>

<!--            <div class="cover-navigation iUp">-->
<!--              <p id="description2" class="panel-cover__description">-->
<!--                如果对本建设有指导性意见或建议，<strong>请联系：</strong>-->
<!--              </p>-->
<!--              <a href="mailto:ybb@nana7mi.com" class="blog-button">-->
<!--                <i class='social iconfont icon-email'></i>-->
<!--                ybb@nana7mi.com-->
<!--              </a>-->
<!--            </div>-->
          </div>
          <div class="arrow_container">
            <svg class="cover_icon iUp" width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-365b8594=""><path fill="currentColor" d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z"></path></svg>
            <svg class="cover_icon iUp" width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-365b8594=""><path fill="currentColor" d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z"></path></svg>
          </div>
        </div>
      </div>
      <div class="panel-cover--overlay cover-slate"></div>
    </div>
    <!-- <div class="beian iUp">
        <a class="icp" href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">XXX</a>
        <a class="gwab" href="http://www.beian.gov.cn/portal/recordQuery" target="_blank">XXX</a>
    </div> -->
  </header>
</template>

<script>
import $ from 'jquery';

export default {
  name: "Cover",
}
let iUp = (function () {
  let t = 0,
      d = 150,
      clean = function () {
        t = 0;
      },
      up = function (e) {
        setTimeout(function () {
          $(e).addClass("up")
        }, t);
        t += d;
      },
      down = function (e) {
        $(e).removeClass("up");
      },
      toggle = function (e) {
        setTimeout(function () {
          $(e).toggleClass("up")
        }, t);
        t += d;
      };
  return {
    clean: clean,
    up: up,
    down: down,
    toggle: toggle
  }
})();

$(document).ready(function () {

  $(".iUp").each(function (i, e) {
    iUp.up(e);
  });

  $(".js-avatar")[0].onload = function () {
    $(".js-avatar").addClass("show");
  }
});

$('.btn-mobile-menu__icon').click(function() {
  if ($('.navigation-wrapper').css('display') == "block") {
    $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
      $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
    });
    $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

  } else {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
  }
  $('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn');
});

</script>

<style src="../assets/css/cover/vno.css" scoped>
/* Use src rather than @import to avoid global style contamination */
/*@import "../assets/css/cover/vno.css";*/
/*@import "../assets/css/cover/iconfont.css";*/
/*@import "../assets/css/cover/onlinewebfonts.css";*/

/* nav-container has no height after being compiled by Vue.js */
#nav-container {
  margin: 0 auto;
  height: 10vmin;
  width: fit-content;
}
</style>
<style>
/* We have below four styles to override the fonts
which was override by bootstrap.min.css imported globally in Video.css */
.panel-title {
  font-size: 3em !important;
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif !important;
}
.panel-subtitle {
  font-size: 1.4em !important;
}
.panel-cover__description {
  font-size: 1.2em !important;
}
.blog-button {
  font-size: 1.1em !important;
}
/* ---- font ---- override ---- end ----*/

.cover_icon {
  margin: -5vmin 0;
  animation: blink 1500ms infinite;
  animation-delay: 1s;
}
.arrow_container {
  height: fit-content;
}
.arrow_container:hover .cover_icon {
  height: 30px;
}
svg:nth-child(2) {
  animation-delay: 750ms;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>