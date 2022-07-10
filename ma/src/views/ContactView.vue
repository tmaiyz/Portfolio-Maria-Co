<template>
  <div class="deux_contents">

    <div class="coord">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h1>Coordonnées</h1>
      </transition>

      <Coordonee />

      <Cv />

    </div>

    <div class="form">
      <div class="txt-form">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <h1>Contactez moi</h1>
        </transition>

        <Form />

      </div>
    </div>
  </div>
</template>

<style scoped>
.deux_contents {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
}

.coord h1 {
  font-size: 37px;
  color: cornflowerblue;
  font-family: 'Oi', cursive;
  text-align: center;
}

.coord {
  display: flex;
  flex-direction: column;
}

.form {
  display: flex;
  flex-direction: column;
}

.form h1 {
  font-size: 37px;
  color: cornflowerblue;
  font-family: 'Oi', cursive;
  text-align: center;

}

@media screen and (max-width: 820px){
  .deux_contents {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    margin-top: 10%;
  }

  .coord h1 {
    font-size: 27px;
    text-align: center;
  }

  .form h1 {
    font-size: 27px;
  }

}

@media screen and (max-width: 280px){
   .coord h1 {
    font-size: 21px;
    text-align: center;
  }

  .form h1 {
    font-size: 21px;
  }
}
</style>

<script>
import gsap from 'gsap'
import Coordonee from '@/components/Coordonee.vue'
import Form from '@/components/Formulaire.vue'
import Cv from '@/components/Cv.vue'

export default {
  name: 'ConTact',
  components: {
    Coordonee,
    Form,
    Cv,
  },
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-50px)'
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
  }
}
</script>

