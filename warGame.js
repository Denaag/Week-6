/*Identify my classes:
player
card deck
game
*/

class Player {
    //class in order to create player
    constructor(name, cards) {
      this.name = name;
      this.cards = cards;
      this.score = 0;
    }
  }
  
  class CardDeck {
    //we want to define each playing card
    constructor() {
      //what attributes a playing card has
      this.cardSuits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //each suit - total is 4
      this.cardRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",]; //each rank - total ranks 13
      this.cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,]; //level each card holds 1-13 (lowest to highest)
      this.deck = []; //create an empty array so that the deck can be made from createDeck method
      this.createDeck();
      this.shuffleDeck();
      this.dealCards();
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
  
    dealCards() {
    //here we will deal out 2 small decks of 26 to each player
        const half = Math.ceil(this.deck.length / 2);    

        const firstHalf = this.deck.slice(0, half); //splitting an array
        const secondHalf = this.deck.slice(half);

        console.log(this.deck = [firstHalf,secondHalf]); //pushing both hands into the empty deck array
    }
  }
  
  class Game {
    //class that will create the game being played
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
  
    turns() {
      //number of plays we will have - it will decrease based on number of cards
      for(let i = this.a.cards.length - 1; i > 0; i--){

        if(this.a.cards[i][1] > this.b.cards[i][1]){
            this.a.score++;
        } else if (this.a.cards[i][1] < this.b.cards[i][1]){
            this.b.score++;
        } else {
            console.log("DRAW"); // if both players play the same card
        }
        //this will display player1 and player2 card and provide updated score
        console.log("PLAYER 1: " + this.a.cards[i][1] + ", SCORE: " + this.a.score+
        "\nPLAYER 2: " + this.b.cards[i][1] + ", SCORE: " + this.b.score);
        console.log("--------");
    }
    }

    gameResult() { // if/else statemnt to show result of game - who's the winner
        if (player1.score > player2.score) {
            console.log("The WINNER is Player1, with a score of " + player1.score + "\nPlayer2's final score is " + player2.score);
        } else {
            console.log("The WINNER is Player2, with a score of " + player2.score + "\nPlayer1's final score is " + player1.score)
        }
    }
  }

let firstDeck = new CardDeck();


let player1 = new Player("Player1", firstDeck.deck[0]); 
let player2 = new Player("Player2", firstDeck.deck[1]);

// console.log("Player1: "+player1.cards[0][1]);
console.log("Player1: " + player1.cards);
console.log("Player2: " + player2.cards);


let newGame = new Game(player1, player2);
newGame.turns();
newGame.gameResult();



// console.log(player1.score > player2.score);


//   let player1 = new Player("Player1"); //creating first player
//   let player2 = new Player("Player2");
//   console.log(player1); //logging out player before any hands are dealt
//   console.log(player2);
  
//   let firstDeck = new CardDeck();
//   firstDeck.createDeck();
//   console.log("just create my deck", firstDeck.deck);
//   firstDeck.shuffleDeck();
//   firstDeck.dealDeck();

//   let newGame = new Game();
//   newGame.turns();
//   console.log("Display", newGame.turns)
  
  //console.log(newGame.cardNames("K"));
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