<template>
  <div class="projets">
    <div class="flex">
      <div>
        <Title title="Twitter" />
        <a target="_blank"
          href="https://github.com/tmaiyz/TWITTER--PHP-JS/commit/2b321e938370835dfa7d63fa392528f9e5713fba">
          <Image filename="/assets/twitter.png" />
        </a>
      </div>
      <div class="center">
        <Texte title="Reproduction de Twitter"
          groupe_date="Développé en 4 semaines / Projet de groupe composé de 5 personnes"
          explication="Création d'une page Inscription/Connexion - Création de tweet - Barre de recherche - Responsivité"
          :language_tabs="['PHP', 'HTML&CSS', 'JS', 'BOOTSTRAP']" />
      </div>
    </div>

    <div class="flex" id="reverse">
      <div class="center">
        <Texte title="Reproduction de Snapchat" groupe_date="Développé en 1 semaine / Projet individuel"
          explication="Gestion d'Inscription/Connexion - Prise et envoie de photo - Message de réception"
          :language_tabs="['REACT NATIVE', 'EXPO GO']" />
      </div>
      <div>
        <Title title="Snapchat" />
        <a href="https://github.com/tmaiyz/SNAPCHAT--REACT-NATIVE-EXPO/commit/8b3f86a7bad629816c4105748b7ca6061010b054"
          target="_blank">
          <Image filename="/assets/red_orange.png" />
        </a>
      </div>
    </div>

    <div class="flex">
      <div>
        <Title title="Quizz" />
        <a href="https://github.com/tmaiyz/QUIZZ-GAME--SYMFONY-HTML-CSS/commit/6366839ec866895e60b59f755b639cf2f3b8589f"
          target="_blank">
          <Image filename="/assets/Q2.png" />
        </a>
      </div>
      <div class="center">
        <Texte title="Pinky Quizz" groupe_date="Développé en 2 semaines / Projet réalisé en 2 semaines avec 3 personnes"
          explication="Création d'un jeu de quizz autonome avec une incription/connexion/admin et l'envoie d'email"
          :language_tabs="['SYMPHONY', 'HTML&CSS']" />
      </div>
    </div>

    <div class="flex" id="reverse">
      <div class="center">
        <Texte title="SPOTIFY" groupe_date="RUSH / Projet de groupe composé de 3 personnes "
          explication="API PHP - Affichage des données" :language_tabs="['JS/REACT', 'PHP', 'SQL']" />
      </div>
      <div>
        <Title title="Spotify" />
        <a href="https://github.com/tmaiyz/RUSH-SPORTIFY--REACT-PHP-SQL/commit/89224d3a10696a50c4f7fcece7cf1666f22fbe75"
          target="_blank">
          <Image filename="/assets/spotify.png" />
        </a>
      </div>
    </div>

    <div class="flex">
      <div>
        <Title title="Jeux 2D" />
        <a href="https://github.com/tmaiyz/QUIZZ-GAME--SYMFONY-HTML-CSS/commit/6366839ec866895e60b59f755b639cf2f3b8589f"
          target="_blank">
          <Image filename="/assets/unity.png" />
        </a>
      </div>
      <div class="center">
        <Texte title="Trash Simulator" groupe_date="GameJam - Développé en 2 jours avec 4 personnes"
          explication="Création d'un jeu en 2D / d'un menu - Réglages - Résolution - Play - Exit " :language_tabs="['UNITY', 'C++']" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#reverse {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.projets {
  display: flex;
  flex-direction: column;
  margin-top: 6%;
}

@media screen and (max-width: 841px) {
  .flex {
    display: flex;
    flex-direction: column;
    margin-top: 4%;
  }

  #reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


}
</style>

<script>
import Image from '@/components/Image.vue'
import Title from '@/components/Title.vue'
import Texte from '@/components/Texte.vue'

export default {
  name: 'ProjetsView',
  components: {
    Title,
    Image,
    Texte,
  },
}
</script>