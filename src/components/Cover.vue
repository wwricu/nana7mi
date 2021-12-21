<template>
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
    <div>
      <nav class="cover-navigation--primary">
        <ul class="navigation">
          <li class="navigation__item">
            <a href="https://space.nana7mi.com" class="blog-button" target="_blank">个人空间</a>
          </li>
          <li class="navigation__item">
            <a href="https://live.nana7mi.com" class="blog-button" target="_blank">直播间</a>
          </li>
          <li class="navigation__item">
            <a href="https://ybb.nana7mi.com" class="blog-button" target="_blank">ybb小火车</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-title {
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  margin: 0 0 5px 0;
  font-size: 2.5em;
  /*letter-spacing: 4px;*/
  color: #fff;
}
</style>
