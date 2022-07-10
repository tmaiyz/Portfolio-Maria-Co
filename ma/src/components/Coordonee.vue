<template>
    <section>
        <ul>
        <li>maria.co.dev@email.com</li>
        <li>maria.co@epitech.eu</li>
        <li>Linkedin: Maria LC</li>
        <li>Github: tmaiyz</li>
        <li>Alternance - NW Groupe</li>
        </ul>
    </section>
</template>


<script>

export default {
  name: 'CoorDonee'
}
</script>

<style scoped>
    li{
        font-family: 'IBM Plex Sans Devanagari', sans-serif;
        font-size: 34px;
        margin: 5% 0;

    }
    section {
        margin-top: 18%;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 820px){
        li {
            font-size: 25px;
        }
    }
    @media screen and (max-width: 280px){
        li {
            font-size: 20px;
        }
    }
</style>