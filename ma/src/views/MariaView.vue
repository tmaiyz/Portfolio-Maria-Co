<template>
  <div class="grande_div">
    <div>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="maria">
          <p>MARIA CO </p>
        </div>
      </transition>
    </div>
    <div class="formation">
      <Title title="DIPLOME FORMATION" />
    </div>

    <div class="projets">
      <div class="flex">
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>BACCAULAURÉAT</p>
            </div>
          </transition>
          <Image filename="/assets/strange.jpeg" />
        </div>
        <div class="texte">
          <Texte title="BAC Scientifique" groupe_date="Obtenu en 2020" explication="Lycée Gustave Eiffel"
            :language_tabs="['Mention Bien']" />
        </div>
      </div>

      <div id="reverse">
        <div class="texte">
          <Texte title="Première année de médecine" groupe_date="2020/2021" explication="Sorbonne Université"
            :language_tabs="['Numéro Apertus']" />
        </div>
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>PACES</p>
            </div>
          </transition>
          <Image filename="/assets/IMG_6912 2.jpg" />
        </div>
      </div>

      <div class="flex">
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>Web@cademie</p>
            </div>
          </transition>
         <a href="https://github.com/tmaiyz/QUIZZ-GAME--SYMFONY-HTML-CSS/commit/6366839ec866895e60b59f755b639cf2f3b8589f"
          target="_blank">
          <Image filename="/assets/Q2.png" />
        </a>
        </div>
        <div class="texte">
          <Texte title="EPITECH" groupe_date="2021-2023" explication="Titre niveau 5 - BAC + 2"
            :language_tabs="['']" />
        </div>
      </div>

       <div id="reverse">
        <div class="texte">
          <Texte title="L1 ESPAGNOL / CHINOIS" groupe_date="Sorbonne Université - 2020/2021" explication="Sorbonne Université"
            :language_tabs="['']" />
        </div>
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>LICENCE LEA</p>
            </div>
          </transition>
          <Image filename="/assets/IMG_5034 2.jpg" />
        </div>
      </div>
    </div>
    <div class="formation">
      <Title title="EXPERIENCE PROFESSIONEL" />
    </div>
    <div class="projets">
      <div class="flex">
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>COMIS DE SERVICE</p>
            </div>
          </transition>
          <Image filename="/assets/rata.png" />
        </div>
        <div class="texte">
          <Texte title="Barmaid" groupe_date="2018-2020 - Thai Royal - Asian Wok" explication="Service et prise de commande
            Encaissement, Réassort en salle et au back-office"
            :language_tabs="['prise de commande', 'préparation de coctails']" />
        </div>
      </div>

      <div class="flex" id="reverse">
        <div class="texte">
          <Texte title="ECOMMERCE" groupe_date="ECOM EMPIRE - 2019" explication="Création d'une boutique e-commerce, Etude de marché des articles" :language_tabs="['']" />
        </div>
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>AUTO-ENTREPRENEUSE</p>
            </div>
          </transition>
          <Image filename="/assets/TAMI.png" />
        </div>
      </div>

       <div class="flex">
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>L'ADRESSE</p>
            </div>
          </transition>
          <Image filename="/assets/architect_sheldon.jpeg" />
        </div>
        <div class="texte">
          <Texte title="Apprenti agente immobilière" groupe_date="2016 - Lognes" explication="Prospecter la clientèle. Effectuer des visites immobilières."
            :language_tabs="['']" />
        </div>
      </div>

      <div class="flex" id="reverse">
        <div class="texte">
          <Texte title="Pharmacie" groupe_date="Bussy-Saint-Georges - 2016" explication=" Réassort des commandes en rayon et au back-office " :language_tabs="['']" />
        </div>
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>Stage de découverte</p>
            </div>
          </transition>
          <Image filename="/assets/strange.jpeg" />
        </div>
      </div>

    </div>
    <div class="formation">
      <Title title="LANGUAGES" />
    </div>
    <div class="projets">
      <div class="flex">
        <div>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <div class="diplome">
              <p>LANGUES</p>
            </div>
          </transition>
          <Image filename="/assets/IMG_3538 2.JPG" />
        </div>
        <div class="texte">
          <Texte title="HELLO - สวัสดี - HOLÀ" groupe_date="Anglais - Thailandais - Espagnol - Teochew"
            explication="Niveau Technique - B1 - B1 - Dialecte Chinois" :language_tabs="['', '']" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.maria p {
  font-family: 'Montserrat Subrayada', sans-serif;
  margin: 3% 0;
  font-size: 67px;
  letter-spacing: 40px;
  color: #00235e;
  text-align: center;
}

.diplome p {
  font-family: 'IBM Plex Sans Devanagari', sans-serif;
  margin: 10% 0;
  font-size: 47px;
  color: #00235e;
  text-align: center;
}

.formation {
  text-align: center;
}

.projets {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.texte {
  display: flex;
  flex-direction: column;
}

.projets {
  margin-top: 6%;
}

#reverse {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media screen and (max-width: 552px) {
  .maria p {
    font-size: 28px;
  }

  .diplome p {
    font-size: 29px;
  }

  .flex {
    display: flex;
    flex-direction: column;
    margin-top: 4%;
  }

  .formation p {
    font-size: 21px;
    letter-spacing: 7px;
  }

  #reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 337px) {
    .maria p {
      font-size: 16px;
    }

    .formation p {
      font-size: 11px;

    }

    .diplome p {
      font-size: 20px;
    }
  }
}
</style>

<script>
import gsap from 'gsap'
import Image from '@/components/Image.vue'
import Title from '@/components/Title.vue'
import Texte from '@/components/Texte.vue'

export default {
  name: 'MaRia',
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
  },
  components: {
    Title,
    Image,
    Texte,
  },
}
</script>
