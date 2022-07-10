<template>
    <div>
        <form ref="form" @submit.prevent="sendEmail">
            <div class="Name_Email">
                <div>
                    <input type="text" name="user_name" placeholder="N A M E" id="name">
                </div>
                <div>
                    <input type="email" name="user_email" placeholder="E M A I L" id="email">
                </div>
            </div>
            <div>
               <textarea name="message" id="message" cols="30" rows="10" placeholder="M E S S A G E"></textarea>
            </div>
            <button type="submit" value="Send" id="send"> E N V O Y E R </button>
        </form>
    </div>
</template>

<style scoped>

form{
    margin-top: 18%;
}
.Name_Email{
    display: flex;
    justify-content: space-between;
}

#name{
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    background-color: #FFFCF2;   
    border-radius: 11px;
    height: 31px;
    width: 11rem;
    border-color: cornsilk;
}
#email{
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    background-color: #FFFCF2;   
    border-radius: 11px;
    height: 31px;
    width: 14rem;
    border-color: cornsilk;
}

textarea{
    width: 100%;
    margin: 10% 0;
}

#message {
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    background-color: #FFFCF2;   
    border-radius: 1rem;
    border-color: cornsilk;
}

button{
    width: 100%;
    border-radius: 2rem;
    background-color: cornflowerblue;
    border: none;
    height: 45px;
}

#send {
    color: white;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-weight: bolder;
}
@media screen and (max-width: 820px) {
    #name {
      width: 7rem ;
    }

}

@media screen and (max-width: 280px) {
    #email{
        width: 7rem ;
    }
}

@media screen and (max-width: 280px) {
    #send{
      font-size: 10px;
    }
}
</style>

<script>

import emailjs from '@emailjs/browser';

export default {
    name: 'FormuLaire',
    methods: {
    sendEmail() {
      emailjs.sendForm('service_2n3k3bt', 'template_nj8c9ql', this.$refs.form, 'eiaL7IAvO756raNEe')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>