const themeButton = document.getElementById('theme-button');
const cardAnimalButtonLeft = document.getElementById('card-animal-button-left')
const cardAnimalButtonRight = document.getElementById('card-animal-button-right')
const body = document.getElementById('body');
const article = document.getElementsByTagName('article');
const section = document.getElementsByTagName('section');
const text = document.querySelectorAll('p, h2, h3, h4, h5, h6');
const animalCards = document.getElementsByClassName('card-animal')

let themeStatusIsLight = Boolean('True')
let animalDiapoNumber = 1

showTheGoodAnimalCard()


themeButton.classList.add('theme-sun')

themeButton.addEventListener('click', () => {

    themeStatusIsLight = !themeStatusIsLight;
    for (const element of article) {
        element.classList.toggle('theme-swap-article');
    }
    for (const element of section) {
        element.classList.toggle('theme-swap-section');
    }
    for (const element of text) {
        element.classList.toggle('theme-swap-text');
    }

    if (themeStatusIsLight) {
        body.style.backgroundImage = "url('" + "./assets/background/light.svg" + "')"
    } else {
        body.style.backgroundImage = "url('" + "./assets/background/dark.svg" + "')"
    }
    
    if (themeStatusIsLight) {
        themeButton.classList.add('theme-sun');
        themeButton.classList.remove('theme-night');
    } else {
        themeButton.classList.add('theme-night');
        themeButton.classList.remove('theme-sun');
    }


});

cardAnimalButtonLeft.addEventListener('click' , () => {
    hideTheWrongAnimalCard()
    if (animalDiapoNumber == 1) {
        animalDiapoNumber = animalCards.length
    } else {
        animalDiapoNumber -= 1
    }
    console.log(animalDiapoNumber);
    showTheGoodAnimalCard()
})

cardAnimalButtonRight.addEventListener('click' , () => {
    hideTheWrongAnimalCard()
    if (animalDiapoNumber == animalCards.length) {
        animalDiapoNumber = 1
    } else {
        animalDiapoNumber += 1
    }
    showTheGoodAnimalCard()
})

function hideTheWrongAnimalCard() {
    let beforeAnimalCard = document.getElementById('card-animal-' + animalDiapoNumber)
    beforeAnimalCard.classList.remove('show')
}

function showTheGoodAnimalCard() {
    let currentAnimalCardToShow =  document.getElementById('card-animal-' + animalDiapoNumber)
    currentAnimalCardToShow.classList.add('show')
}

function getAnimalCardsInJSON() {
    
}