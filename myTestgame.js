/*Identify my classes:
player
card
deck
*/

function createDeck() {
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //need array to identify my suits (4)
    const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; //need array to display all values
    const deck = []; //empty array for our deck of 52 we will create

    for (i = 0; i < suits.length; i++) { //initial loop to cycle through suits array
        for (j = 0; j < value.length; j++) { // nested for loop to cycle through value array length
            //console.log(suits[i] + value[j]); this displayed all 52 cards on a new line; creating a long list we have to scroll
            deck.push(suits[i] + value[j]); //this will create the array deck (w/ drop down arrow) of all 52 on a single line and push it to the empty array deck
        }
    }
    return deck;// this creates the deck but doesn't show it on the screen
}

// let newDeck = new createDeck();
// console.log(newDeck);

//console.log(deck)

function shuffleDeck(deck) {
    for (let i = 0; i < 52; i++) {
        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}

let firstDeck = createDeck();
shuffleDeck(firstDeck);
console.log(firstDeck);

// class Deck { // need this to be able to create decks of cards between 2 players
//     constructor(cards) {
//         this.cards = [];
//     }

//     shuffle() {
//         //something goes here
//     }

//     deal() {
//         //something goes here
//     }
// }


// class Card {
//     constructor(suit, value) {
//         this.suit = suit;
//         this.value = value;
//     }

//     show() {
//         console.log(`${this.suit} ${this.value}`)
//     }
// }

// let card1 = new Card("Spade", "2");
// card1.show();

// class Player {
//     constructor() {
//         this.player1 = player1;
//         this.player2 = player2;
//     }

//     play() {
//         if (i = 0; i < 26; i++) {
//             console.log(player1)
//         }
//     }
    
// }

// let player1 = new Player()
// let player2 = new Player()