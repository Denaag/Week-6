/*Identify my classes:
player
card deck
game
*/

class Player { //class in order to create player
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.score = 0;
    }

}

let player1 = new Player("Player1") //creating first player
let player2 = new Player("Player2")
console.log(player1) //logging out player before any hands are dealt
console.log(player2)



class CardDeck { //we want to define each playing card
    constructor() { //what attributes a playing card has
        this.cardSuits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //each suit - total is 4
        this.cardRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; //each rank - total ranks 13
        this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]; //level each card holds 1-13 (lowest to highest)
        this.deck = []; //create an empty array so that the deck can be made from createDeck method
    }

    createDeck() {
        //let deck = [];
        for (let i = 0; i < this.cardSuits.length; i++) { //initial loop to cycle through suits array
            for (let j = 0; j < this.cardValues.length; j++) { // nested for loop to cycle through value array length - if you console.log(suits[i] + value[j]); this displayed all 52 cards on a new line; creating a long list we have to scroll
                this.deck.push(this.cardSuits[i] + this.cardValues[j]); //this will create the array deck (w/ drop down arrow) of all 52 on a single line and push it to the empty array deck
            }
        }
        //return this.deck;// this creates the deck but doesn't show it on the screen - also keeping this line was throwing an  error of sort once I was logging info on lines 75-85
    }


      shuffleDeck() {
        for (let i = 0; i < this.deck.length; i++) {
        //create a random number between 0 and the length of the deck
        let randomNumber = Math.floor(Math.random() * this.deck.length);
        //create a temp variable to store the current card
        let temp = this.deck[i];
        //set the current card to the random card
        this.deck[i] = this.deck[randomNumber];
        //set the random card to the temp variable
        this.deck[randomNumber] = temp;
        }
           
    }

    dealDeck() {
        //here we will deal out 2 small decks of 26 to each player
        player1.cards.push(this.deck.slice(0, 26));
        player2.cards.push(this.deck.slice(26, 52));
        
    }

}

class Game { //class that will create the game being played
    constructor() {
        //players
        //score
        //result
    }

    turns() { //number of plays we will have
        
        let player1Card = [];
        let player2Card = [];
        for (let i = 0; i < 26; i++) {
            player1Card = player1.cards;
        }
    }

    cardNames(cardValues) {

        switch(cardValues) {
            case "2":
                return 2;
                break;
            case "3":
                return 3;
                break;
            case "4":
                return 4;
                break;
            case "5":
                return 5;
                break;
            case "6":
                return 6;
                break;
            case "7":
                return 7;
                break;
            case "8":
                return 8;
                break;
            case "9":
                return 9;
                break;
            case "10":
                return 10;
                break;
            case "J":
                return 11;
                break;
            case "Q":
                return 12;
                break;
            case "K":
                return 13;
                break;
            case "A":
                return 14;
                break;
        }
        
    }

    battle() { //
        //
    }
}

let newGame = new Game();
newGame.turns();
console.log(player1)
//console.log(newGame.cardNames("K"));

let firstDeck = new CardDeck();
firstDeck.createDeck();
firstDeck.shuffleDeck();
firstDeck.dealDeck();
// console.log(firstDeck)
// console.log(player1)
// console.log(player2)
// console.log(firstDeck.createDeck());
// console.log(firstDeck.shuffleDeck())
// console.log(firstDeck)

// let firstDeck = new CardDeck(); //this is for cardDeck class
// console.log(firstDeck.createDeck()); //this is for createDeck method that will create an array of 52 cards based on cardSuits and cardRanks (this created my deck of cards)

// let firstDeck = new CardDeck() //this is for cardDeck class
// console.log(firstDeck.createDeck()) //this is for create deck method