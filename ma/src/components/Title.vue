<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <p>{{ title }}</p>
  </transition>
</template>

<style scoped>
p {
  font-family: 'Oi', cursive;
  margin: 9% 0;
  font-size: 41px;
  letter-spacing: 6px;
  color: cornflowerblue;
}

@media screen and (max-width: 841px) {
  p {
    text-align: center;
  }
}

@media screen and (max-width: 364px) {
  p {
    font-size: 29px;
  }
}
</style>

<script>
import gsap from 'gsap'

export default {
  name: 'TiTle',
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(50px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 2,
      })
    }
    return { beforeEnter, enter }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  }

}
</script>