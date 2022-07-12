/*Identify my classes:
player
card
deck
*/

// class Player {
//     constructor(players, cards, score) {
//         this.players = players;
//         this.cards = cards;
//         this.score = score;
//     }
// }

class CardDeck { //we want to define each playing card
    constructor() { //what attributes a playing card has
        this.cardSuits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //each suit - total is 4
        this.cardRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; //each rank - total ranks 13
        this.cardValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]; //level each card holds 1-13 (lowest to highest)
    }

    createDeck() {
        let deck = [];
        for (let i = 0; i < this.cardSuits.length; i++) { //initial loop to cycle through suits array
            for (let j = 0; j < this.cardRanks.length; j++) { // nested for loop to cycle through value array length - if you console.log(suits[i] + value[j]); this displayed all 52 cards on a new line; creating a long list we have to scroll
                deck.push(this.cardSuits[i] + this.cardRanks[j]); //this will create the array deck (w/ drop down arrow) of all 52 on a single line and push it to the empty array deck
            }
        }
        return deck;// this creates the deck but doesn't show it on the screen
    }

    shuffleDeck() { //randomize the deck created
        for (let i = 0; i < 52; i++) {
            let tempCard = deck[i];
            let randomIndex = Math.floor(Math.random() * 52);
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempCard;
        }

    }

    dealDeck() {
        //here we will deal out 2 small decks of 26 to each player 
    }

}

let firstDeck = new CardDeck();
console.log(firstDeck.createDeck());
console.log(firstDeck.shuffleDeck())

// let firstDeck = new CardDeck(); //this is for cardDeck class
// console.log(firstDeck.createDeck()); //this is for createDeck method that will create an array of 52 cards based on cardSuits and cardRanks (this created my deck of cards)

// let firstDeck = new CardDeck() //this is for cardDeck class
// console.log(firstDeck.createDeck()) //this is for create deck method