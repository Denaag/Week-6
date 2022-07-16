/*Identify my classes:
player
card
deck
*/


//Made a slight tweak to your code, please review it.

/*Identify my classes:
player
card deck
game
*/

class Player {
    //class in order to create player
    constructor(name) {
      this.name = name;
      this.cards = [];
      this.score = 0;
    }
  }
  
  let player1 = new Player("Player1"); //creating first player
  let player2 = new Player("Player2");
  console.log(player1); //logging out player before any hands are dealt
  console.log(player2);
  
  class CardDeck {
    //we want to define each playing card
    constructor() {
      //what attributes a playing card has
      this.cardSuits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //each suit - total is 4
      this.cardRanks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
      ]; //each rank - total ranks 13
      this.cardValues = [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
      ]; //level each card holds 1-13 (lowest to highest)
      this.deck = []; //create an empty array so that the deck can be made from createDeck method
    }
  
    createDeck() {
      //let deck = [];
      for (let i = 0; i < this.cardSuits.length; i++) {
        //initial loop to cycle through suits array
        for (let j = 0; j < this.cardValues.length; j++) {
          // nested for loop to cycle through value array length - if you console.log(suits[i] + value[j]); this displayed all 52 cards on a new line; creating a long list we have to scroll
          this.deck.push([
            this.cardRanks[j] + " of " + this.cardSuits[i],
            this.cardValues[j]
          ]); //this will create the array deck (w/ drop down arrow) of all 52 on a single line and push it to the empty array deck
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
  
  class Game {
    //class that will create the game being played
    constructor() {
      //players
      //score
      //result
    }
  
    turns() {
      //number of plays we will have
  
      let player1Card = [];
      let player2Card = [];
      for (let i = 0; i < 26; i++) {
        player1Card = new Player(player1)
      }
    //   return player1Card
    }
  
    cardNames(cardValues) {
      switch (cardValues) {
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
  
    battle() {
      //
      //
    }
  }
  
  let newGame = new Game();
  console.log(newGame.turns());
  
  //console.log(newGame.cardNames("K"));
  
  let firstDeck = new CardDeck();
  firstDeck.createDeck();
  console.log("just create my deck", firstDeck.deck);
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



// function cardCreator() {
//         let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
//         let amount = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

//         for (let i = 0; i < suits.length; i++) { //this loops 4 time once for every suit
//             for (let u = 0; u < amount.length; u++) { //this loops every amount
//             let create = {amount: amount[u], suit: suits[i]}; //createa an opject with the suit name that is looping and the amount that is also looping
//             createdDeck.push(create) ;
//             }  
//         } 
// }

// console.log(cardCreator(""));

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