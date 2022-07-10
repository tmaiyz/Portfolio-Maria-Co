<template>
	<div>

		<div class="ma">

			<div class="texte1">
				<h3>Maria CO</h3>
				<h4>Ancienne étudiante en médecine. Aujourd'hui développeuse.
					Invariablement auto-entrepreneuse & future créatrice</h4>
			</div>

			<div class="photo">
				<Image filename="/assets/ppma.png" />
			</div>

		</div>

		<div class="img">
			<Image id="pano" filename="/assets/IMG_1224.JPG" />
			<div class="texte">
				<transition appear @before-enter="beforeEnter" @enter="enter">
					<div class="maintenant">
						<p>maintenant</p>
					</div>
				</transition>
				<transition appear @before-enter="beforeEnter" @enter="enter">
					<div class="maria">
						<h1>MARIA CO DÉVELOPPEUR WEB</h1>
					</div>
				</transition>
				<transition appear @before-enter="beforeEnter" @enter="enter">
					<div class="maria">
						<p>Ancienne étudiante en médecine. Aujourd'hui développeuse.
							Invariablement auto-entrepreneuse & future créatrice</p>
					</div>
				</transition>
			</div>
		</div>

		<div class="projets">
			<div id="reverse">
				<div class="center">
					<Texte title="G I T H U B - tmaiyz" groupe_date="" explication="" />
				</div>
				<div>
					<a href="https://github.com/tmaiyz?tab=overview&from=2022-07-01&to=2022-07-08" target="_blank">
						<Image filename="/assets/github.png" />
					</a>
				</div>
			</div>
		</div>



	</div>
</template>

<style scoped>
img {
	margin-top: 3%;
}

.maintenant p {
	font-family: 'Oi', cursive;
	margin: 5% 0;
	font-size: 67px;
	color: cornflowerblue;
}

.maria h1 {
	font-family: 'Montserrat Subrayada', sans-serif;
	margin: 7% 0;
	font-size: 30px;
	color: rgb(255, 255, 255);
}

.maria p {
	font-family: 'IBM Plex Sans Devanagari', sans-serif;
	margin-top: 5%;
	font-size: 17px;
	color: rgb(255, 255, 255);
}

#pano {
	width: 100%;
}

.texte {
	position: absolute;
	top: 25%;
	left: 18%;
	opacity: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
	z-index: 1;
}

.ma {
	display: none;
}

.img {
	position: relative;
	width: 100%;
	align-items: center;
}

#reverse {
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	flex-wrap: wrap;
}

#reverse img {
	width: 100%;
	align-items: center;
}

.projets {
	display: flex;
	flex-direction: column;
	margin-top: 6%;
}

@media screen and (max-width: 2800px) {
	.texte {
		top: 26%;
		left: 35%;
	}
}

@media screen and (max-width: 2560px) {
	.texte {
		top: 26%;
		left: 30%;
	}
}

@media screen and (max-width: 1954px) {
	.texte {
		top: 26%;
		left: 26%;
	}
}

@media screen and (max-width: 1624px) {
	.texte {
		top: 31%;
		left: 18%;
	}
}

@media screen and (max-width: 1449px) {
	.maintenant p {
		font-size: 47px;
	}

	.maria h1 {
		font-size: 23px;
	}
}

@media screen and (max-width: 1398px) {
	.texte {
		top: 26%;
		left: 17%;
	}
}

@media screen and (max-width: 1249px) {
	.texte {
		top: 26%;
		left: 13%;
	}
}

@media screen and (max-width: 1120px) {
	.texte {
		top: 26%;
		left: 22%;
	}

	.maintenant p {
		font-size: 35px;
		letter-spacing: 10px;
	}

	.maria h1 {
		font-size: 20px;
	}

	.maria p {
		font-size: 12px;
	}

	.img {
		display: none;
	}

	.ma {
		display: block;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.ma h3 {
		font-family: 'Montserrat Subrayada', sans-serif;
		font-size: 36px;
	}

	.texte1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 9%;
	}

	.texte1 h4 {
		font-family: 'IBM Plex Sans Devanagari', sans-serif;
		font-size: 16px;
		margin-top: 2%;
		font-style: italic;
	}

	.photo {
		padding: 3%;
	}


}

@media screen and (max-width: 1120px) {
	.texte {
		position: absolute;
	}
}

@media screen and (max-width: 841px) {
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ma {
		display: flex;
		flex-direction: column-reverse;
	}

	.texte1 {
		align-items: center;
		text-align: center;
	}

}

@media screen and (max-width: 360px){
	.photo img {
		width: 13pc;
	}

	.ma h3 {
		font-size: 31px;
	}

	.texte1 h4 {
		font-size: 14px;
	}
}
</style>

<script >
import gsap from 'gsap'
import Image from '@/components/Image.vue'
import Texte from '@/components/Texte.vue'
// import Title from '@/components/Title.vue'

export default {
	name: 'HomeView',
	components: {
		Image,
		Texte,
		// Title,
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

