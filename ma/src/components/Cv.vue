<template>
<div class="cv">
     <a :href="`${publicPath}CV_Maria_CO.pdf`" target="_blank">T E L E C H A R G E R   M O N   C V / </a>
</div>   
</template>


<style scoped>
.cv{
    width: 100%;
    border-radius: 2rem;
    background-color: cornflowerblue;
    border: none;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14%;
}

a {
    color: white;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    text-decoration: none;
    font-size: 14px;
}

@media screen and (max-width: 280px) {
    a{
      font-size: 10px;
    }
}
   
</style>

<script>

export default {
  name: 'CV',
  data: () => ({ publicPath: process.env.BASE_URL }),
}
</script>