console.log("Generating a basic set of cards.");

// class to define each playing card
class PlayingCard {
  constructor() {
    // There are 4 suits
    this.cardSuits = [
      "clubs \u2663",
      "diamonds \u2666",
      "hearts \u2665",
      "spades \u2660",
    ];
    // There are 13 ranks
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
    ];
    // Each card has a numerical value of 1-13
    this.cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }

  // iterates through each cardSuits, cardRanks, and cardValues and creates a new array of cards.
  createCards() {
    // A new array to hold all the cards
    let cardDeck = [];
    // For in loop to iterate through each suit. (4 Loops)
    for (let cardSuit in this.cardSuits) {
      // For in loop to iterate through each rank. (13 Loops)
      for (let cardRank in this.cardRanks) {
        // Pushs the card to the cardDeck array.
        cardDeck.push([
          this.cardValues[cardRank],
          this.cardRanks[cardRank] + " of " + this.cardSuits[cardSuit],
        ]);
      }
    }
    console.log("cardDeck in createCards method:", cardDeck);
    // Returns the cardDeck array.
    return cardDeck;
  }
}

// class to define a deck of cards
class CardDeck {
  constructor(cards) {
    // Creates a new array to hold all the cards
    this.cards = cards;
  }
}

// creates new cards
let newCards = new PlayingCard();
console.log("newCards in createCards method:", newCards);

// creates a new card deck
let newCardDeck = new CardDeck(newCards.createCards());
console.log("my new card deck class:", newCardDeck);

console.log(newCardDeck.cards);