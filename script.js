/*----- constants -----*/

const carouselImages = [
    "./design/images/desktop-image-hero-1.jpg", 
    "./design/images/desktop-image-hero-2.jpg", 
    "./design/images/desktop-image-hero-3.jpg"
];

/*----- state variables -----*/

let currentSlide = 0;

/*----- cached elements  -----*/

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const carouselImage = document.getElementById('img1');

/*----- event listeners -----*/

leftArrow.addEventListener('click', () => carouselShift('left'));
rightArrow.addEventListener('click', () => carouselShift('right'));

/*----- functions -----*/

function carouselShift(direction) {
    if (direction === 'right') {
        if (currentSlide < carouselImages.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
    } else if (direction === 'left') {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = carouselImages.length - 1;
        }
    }
    carouselImage.style.backgroundImage = `url(${carouselImages[currentSlide]})`;
}