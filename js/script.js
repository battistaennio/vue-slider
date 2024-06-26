//Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

//inizializzazione Vue
const { createApp } = Vue;

//creo istanza
createApp({
    data() {
        
        return {
            //indice
            activeGame: 0,

            //array dei giochi
            slides: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morales",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        //funzione da attivare al click di next
        nextGame() {
            //incremento di uno l'indice
            this.activeGame++;
            //se siamo arrivati all'ultimo gioco, resetto l'indice a zero
            if(this.activeGame > this.slides.length - 1) {
                this.activeGame = 0;
            }
        },
        
        prevGame() {
            //decremento di uno l'indice
            this.activeGame--;
            //se siamo arrivati al primo gioco, imposto l'indice all'ultimo gioco dell'array
            if(this.activeGame < 0) {
                this.activeGame = this.slides.length - 1;
            }
        },

    }
  }).mount("#app");
  