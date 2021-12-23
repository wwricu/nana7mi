<template>
  <div id="intro" :class="{'leftIn':Display==true,'leftOut':Display==false}">简介</div>
  <div id="image" :class="{'rightIn':Display==true,'rightOut':Display==false}"></div>
</template>

<script>
export default {
  name: "Home",
  props: {
    Display: Boolean,
  }
}
</script>

<style scoped>
#intro {
  top: 15rem;
  left: 50%;
  height: 70rem;
  width: 50rem;
  transform: translateX(-120%);
  position: absolute;
  z-index: 100;
  background-color: green;
  text-align: center;
  padding-top: 3.75rem;
  font-size: 1.875rem;
  color: white;
}
#image {
  top: 15rem;
  right: 50%;
  height: 70rem;
  width: 50rem;
  transform: translateX(120%);
  position: absolute;
  z-index: 100;
  background: url("../assets/image/kachiyu_.jpg") no-repeat fixed center 0;
  background-size: cover;
}

.leftIn {
  animation: leftIn 1s ease;
}
.leftOut {
  animation: leftOut 1s ease;
  animation-fill-mode: forwards;
}
.rightIn {
  animation: rightIn 1s ease;
}
.rightOut {
  animation: rightOut 1s ease;
  animation-fill-mode: forwards;
}
@keyframes leftIn {
  from {
    transform: translateX(-250%);
    opacity: 0;
  }
  to {
    transform: translateX(-120%);
    opacity: 1;
  }
}
@keyframes leftOut {
  from {
    transform: translateX(-120%);
    opacity: 1;
  }
  to {
    transform: translateX(-250%);
    opacity: 0;
  }
}
@keyframes rightIn {
  from {
    transform: translateX(250%);
    opacity: 0;
  }
  to {
    transform: translateX(120%);
    opacity: 1;
  }
}
@keyframes rightOut {
  from {
    transform: translateX(120%);
    opacity: 1;
  }
  to {
    transform: translateX(250%);
    opacity: 0;
  }
}

@media only screen and (max-width:1200px) {
  /* Video animation fit */
  #intro {
    left: 50%;
    height: 70rem;
    width: 50%;
    transform: translateX(0);
  }
  #image {
    right: 50%;
    height: 70rem;
    width: 50%;
    transform: translateX(0);
  }

  @keyframes leftIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes leftOut {
    from {
      transform: translateX(-100%);
      opacity: 1;
    }
    to {
      transform: translateX(0);
      opacity: 0;
    }
  }
  @keyframes rightIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes rightOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
}

@media only screen and (min-height:1400px) and (max-width: 1200px) {
  #intro {
    height: 50rem;
  }
  #image {
    height: 50rem;
  }
}
</style>
