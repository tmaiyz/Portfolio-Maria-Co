<template>
    <h1>{{ title }}</h1>
    <h5>{{ groupe_date }}</h5>
    <h6>{{ explication }}</h6>
    <ul>
        <li v-for="language_tab in language_tabs" :key="language_tab">{{ language_tab }}</li>
    </ul>
</template>

<style scoped>
h1 {
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-size: 36px;
    color: #00235e;
    text-align: center;
}

h5 {
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-size: 13.5px;
    margin: 4% 0;
    font-weight: bold; 
    font-style: italic;
    text-align: center;
}
h6 {
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-size: 13.5px;
    text-align: center;
}

ul {
    display: flex;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    justify-content: space-around;   
    margin: 4% 0;
    text-align: center;
}

@media screen and (max-width: 841px){
    h1{
        margin-top: 10%;
        font-size: 29px;
        text-align: center;
    }

    h5{
        text-align: center;
        font-size: 12.5px;
    }
    h6 {
        text-align: center;
        font-size: 12.5px;
    }
    li {
        margin: 0 13%;
        font-size: 13px;
    }
}

@media screen and (max-width: 364px){
    h1{
        font-size: 22px;
    }
    h5 {
           font-size: 11.5px;
        font-weight: bolder;
    }
    h6 {
        font-size: 12.5px;
        font-weight: bolder;
    }
}


</style>

<script>
export default {
    name: "TexTe",
    props: {
        title: {
            type: String,
            required: true,
        },
        groupe_date: {
            type: String,
            required: true,
        },
        explication: {
            type: String,
            required: true,
        },
        language_tabs: {
            type: Array,
            required: true,
            default: () => [],
        }
    }
}
</script>