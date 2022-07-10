<template>
  <img :src="filename">
</template>

<style scoped>
img {
  width: 400px;
}

@media screen and (max-width: 841px) {
  img {
    width: 336px;
  }
}

@media screen and (max-width: 364px){
  img {
    width: 285px;
  }

}
</style>

<script>

export default {
  name: 'ImaGe',
  props: {
    filename: {
      type: String,
      required: true,
    }
  },
}
</script>