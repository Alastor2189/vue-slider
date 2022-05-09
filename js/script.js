//Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce



const app = new Vue({
    el: "#root",
    data: {
        statesArray: [{
                Image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                Image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum,'
            },
            {
                Image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsumLorem ipsum, dolor sit amet consectetur adipisicing elit'
            },
            {
                Image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                Image: 'img/01.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
        ],
        positionImage: 0,
    },
    methods: {
        clickPreImage: function() {
            if (this.positionImage === 0) {
                this.positionImage = this.statesArray.length - 1;
            } else {
                this.positionImage--;
            }

        },

        clickNextImage: function() {
            if (this.positionImage == this.statesArray.length - 1) {
                this.positionImage = 0;
            } else {
                this.positionImage++;
            }
        }

    }
})