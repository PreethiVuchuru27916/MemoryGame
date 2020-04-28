console.log("js started");
const cardsArray = [
    {
        name: 'prof',
        img: './assets/images/prof.jpg'
    },
    {
        name: 'prof',
        img: './assets/images/prof.jpg'
    },
    {
        name: 'berlin',
        img: './assets/images/berlin.jpg'
    },
    {
        name: 'berlin',
        img: './assets/images/berlin.jpg'
    },
    {
        name: 'tokyo',
        img: './assets/images/tokyo.jpg'
    },
    {
        name: 'tokyo',
        img: './assets/images/tokyo.jpg'
    },
    {
        name: 'rio',
        img: './assets/images/rio.jpg'
    },
    {
        name: 'rio',
        img: './assets/images/rio.jpg'
    },
    {
        name: 'nairobi',
        img: './assets/images/nairobi.jpg'
    },
    {
        name: 'nairobi',
        img: './assets/images/nairobi.jpg'
    },
    {
        name: 'denver',
        img: './assets/images/denver.jpg'
    },
    {
        name: 'denver',
        img: './assets/images/denver.jpg'
    }
]

const grid = document.querySelector('.grid');
const result = document.querySelector('#result');
const message = document.querySelector('#message');
var cardsChosen = [];
var cardsChosenID = [];
var cardsWon = [];

cardsArray.sort(function(a,b){ return 0.5 - Math.random()});
// Creating board
function createBoard() {
    for(let i=0; i< cardsArray.length;i++){
        var card = document.createElement('img');
        card.setAttribute('src','./assets/images/mask.jpg');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}
// Flip card when clicked
function flipcard() {
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src', cardsArray[cardID].img);
    if(cardsChosen.length===2){
        setTimeout(matchCards,500);
    }
}
// Check if two cards match 
function matchCards(){
    var cards = document.querySelectorAll('img');
    const firstCard = cardsChosenID[0];
    const secondCard = cardsChosenID[1];
    
    if(cardsChosen[0]===cardsChosen[1]){
        cards[firstCard].setAttribute('src','./assets/images/red.jpg');
        cards[secondCard].setAttribute('src','./assets/images/red.jpg');
        cardsWon.push(cardsChosen);       
    }
    else{
        cards[firstCard].setAttribute('src','./assets/images/mask.jpg');
        cards[secondCard].setAttribute('src','./assets/images/mask.jpg');
    } 

    cardsChosen = [];
    cardsChosenID = [];
    result.textContent = cardsWon.length; 
    if(cardsWon.length===(cardsArray.length)/2){
        message.textContent = "Congratulations!You have a great memory...:)";        
    }
}

createBoard();
