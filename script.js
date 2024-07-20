/*----- constants -----*/

const images = [];

/*----- state variables -----*/

let currentImage = 0;

/*----- cached elements  -----*/

const leftArrow = documment.getElementById('left-arrow');
const rightArrow = documment.getElementById('right-arrow');

/*----- event listeners -----*/

leftArrow.addEventListener('click', carouselLeft)
rightArrow.addEventListener('click', carouselRight)

/*----- functions -----*/

function carouselLeft() {
    console.log('left');
}

function carouselRight() {
    console.log('right');
}