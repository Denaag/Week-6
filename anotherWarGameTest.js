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
      this.cardRanks = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]; //each rank - total ranks 13
      this.cardValues = [2, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      console.log(this.deck = []); //create an empty array so that the deck can be made from createDeck method
      this.createDeck();
      this.shuffleDeck();
      this.dealCards();
    }
  
    createDeck() {

      for (let i = 0; i < this.cardSuits.length; i++) {
        for (let j = 0; j < this.cardValues.length; j++) {
          this.deck.push([
            this.cardRanks[j] + " of " + this.cardSuits[i],
            this.cardValues[j]
          ]); 
        }
      }
    }
  
    shuffleDeck() {
      for (let i = 0; i < this.deck.length; i++) {

        let randomNumber = Math.floor(Math.random() * this.deck.length);

        let temp = this.deck[i];

        this.deck[i] = this.deck[randomNumber];

        this.deck[randomNumber] = temp;
      }
    }

    dealCards(){
        
        const half = Math.ceil(this.deck.length / 2);    

        const firstHalf = this.deck.slice(0, half);
        const secondHalf = this.deck.slice(half);

        console.log(this.deck = [firstHalf,secondHalf]);
    }
}
  
class Game {

    constructor(a,b) {
        this.a = a;
        this.b=b;
    }

    turns() {
        for(let i =this.a.cards.length-1;i>0;i--){

            if(this.a.cards[i][1]>this.b.cards[i][1]){

                this.a.score++;
            } else if (this.a.cards[i][1]<this.b.cards[i][1]){

                this.b.score++;
            } else {
                console.log("DRAW");
            }
            
            console.log("PLAYER 1: "+this.a.cards[i][1]+", SCORE: "+this.a.score+
            "\nPLAYER 2: "+this.b.cards[i][1]+", SCORE: "+this.b.score);
            console.log("--------");
        }
    }


}
  



  
let firstDeck = new CardDeck();


let player1 = new Player("Player1", firstDeck.deck[0]); 
let player2 = new Player("Player2", firstDeck.deck[1]);

console.log("Player1: "+player1.cards[0][1]);
console.log("Player2: "+player2.cards);


let newGame = new Game(player1, player2);
newGame.turns();
console.log(player1.score>player2.score);