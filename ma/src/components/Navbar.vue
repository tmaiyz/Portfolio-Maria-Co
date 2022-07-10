<template>
<nav> 
  <router-link to="/contact">Contact</router-link>
  <router-link to="/projets">Projets</router-link>
  <router-link to="/maria">MA /</router-link>
  <router-link to="/univers">Univers</router-link>       
  <router-link to="/">Home</router-link>
</nav>
<router-view /> 
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-evenly;
    margin: 2% 0;
}

a {
   font-size: 20px;
    text-decoration-line: none;
    color: black;
    font-family: 'Montserrat Subrayada', sans-serif;
    font-size: 31px;

}

@media screen and (max-width: 1117px) and (min-width: 703px){
  a {
    font-size: 19px;
  }
}

@media screen and (max-width: 703px){
  a {
    font-size: 11px;
  }
}
/* .route-enter-from{
  opacity: 1;
  transform: translateX(100px)
}
.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 1;
  transform: translateX(-100px)
}

.route-leave-active{
  transition: all 0.3s ease-in;
} */
</style>
