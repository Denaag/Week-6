/*Identify my classes:
player
card
deck
*/

function cardCreator() {
        let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
        let amount = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

        for (let i = 0; i < suits.length; i++) { //this loops 4 time once for every suit
            for (let u = 0; u < amount.length; u++) { //this loops every amount
            let create = {amount: amount[u], suit: suits[i]}; //createa an opject with the suit name that is looping and the amount that is also looping
            createdDeck.push(create) ;
            }  
        } 
}

console.log(cardCreator(""));

// function cardNames(cardValues) {

// switch(cardValues) {
//     case "2":
//         return 2;
//         break;
//     case "3":
//         return 3;
//         break;
//     case "4":
//         return 4;
//         break;
//     case "5":
//         return 5;
//         break;
//     case "6":
//         return 6;
//         break;
//     case "7":
//         return 7;
//         break;
//     case "8":
//         return 8;
//         break;
//     case "9":
//         return 9;
//         break;
//     case "10":
//         return 10;
//         break;
//     case "J":
//         return 11;
//         break;
//     case "Q":
//         return 12;
//         break;
//     case "K":
//         return 13;
//         break;
//     case "A":
//         return 14;
//         break;
// }

// }


// console.log(cardNames(""))




// function createDeck() {
//     const suits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //need array to identify my suits (4)
//     const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; //need array to display all values
//     const deck = []; //empty array for our deck of 52 we will create

//     for (i = 0; i < suits.length; i++) { //initial loop to cycle through suits array
//         for (j = 0; j < value.length; j++) { // nested for loop to cycle through value array length
//             //console.log(suits[i] + value[j]); this displayed all 52 cards on a new line; creating a long list we have to scroll
//             deck.push(suits[i] + value[j]); //this will create the array deck (w/ drop down arrow) of all 52 on a single line and push it to the empty array deck
//         }
//     }
//     return deck;// this creates the deck but doesn't show it on the screen
// }

// // let newDeck = new createDeck();
// // console.log(newDeck);

// //console.log(deck)

// function shuffleDeck(deck) {
//     for (let i = 0; i < 52; i++) {
//         let tempCard = deck[i];
//         let randomIndex = Math.floor(Math.random() * 52);
//         deck[i] = deck[randomIndex];
//         deck[randomIndex] = tempCard;
//     }
// }

// let firstDeck = createDeck();
// shuffleDeck(firstDeck);
// console.log(firstDeck);

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