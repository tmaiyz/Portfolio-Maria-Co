<template>
  <div class="univers">
    <div class="center" id="planet">
      <Title title="L'environnement c'est tout ce qui n'est pas moi" />
    </div>

    <div class="center">
      <img src="/assets/logo_totoro.JPG" />
    </div>
    <div class="center" id="planet">
      <Title title="Architecture & Décoration D'intérieur" />
    </div>
    <div class="flex">
      <div>
        <img src="/assets/Wociety.jpeg" />
      </div>
      <div>
        <img src="/assets/IMG_0234 2.JPG" />
      </div>
      <div>
        <img src="/assets/Insidy.jpeg" />
      </div>
      <div>
        <img src="/assets/home.jpeg" />
      </div>
    </div>
    <div class="center" id="planet">
      <Title title="On devrait tous avoir une vie avec vue sur la mer" />
    </div>
    <div class="flex">
      <div>
        <img src="/assets/view_bateau.jpeg" />
      </div>
      <div>
        <img src="/assets/IMG_4179 2.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_4266 2.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_5994 2.JPG" />
      </div>
    </div>
    <div class="center" id="planet">
      <Title title="Taekwondo - Discipline - Contentration - Rigueur" />
    </div>
    <div class="flex">
      <div>
        <img src="/assets/tkd_dessin.jpeg" />
      </div>
      <div>
        <img src="/assets/Taekwondo.jpeg" />
      </div>
      <div>
        <img src="/assets/Vetor.jpeg" />
      </div>
      <div>
        <img src="/assets/Marius.jpeg" />
      </div>
    </div>
    <div class="center" id="planet">
      <Title title="PUUUNG - YOUR NAME - haku & chihiro - Leonard & penny hofstadter " />
    </div>
    <div class="flex">
      <div>
        <img src="/assets/IMG_3539 2.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_4846 2.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_5028 2.JPG" />
      </div>
      <div>
        <img src="/assets/penny_leo.jpeg" />
      </div>
    </div>
    <div class="center" id="planet">
      <Title title="Olaf - Studio Ghibli - Mushu" />
    </div>
    <div class="flex">
      <div>
        <img src="/assets/IMG_5030 2.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_8004.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_4927 2.JPG" />
      </div>
      <div>
        <img src="/assets/IMG_5034 2.JPG" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.univers {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5%;
}

img {
  width: 300px;
}

#planet p {
  font-family: 'IBM Plex Sans Devanagari', sans-serif;
  margin: 5% 0;
  color: #00235e;
  font-weight: bolder;
  font-style: italic;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
}

.center {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1174px){
    #planet p {
       font-size: 19px;
    }
    img {
      width: 198px;
    }
}

@media screen and (max-width: 779px){
  #planet p {
       font-size: 9px;
       font-family: 'Montserrat Subrayada', sans-serif;
  }

  .flex{
    display: flex;
    align-items: center;
    margin-top: 5%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
 
}
</style>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'UniVers',
  components: {
    Title
  }
}
</script>
