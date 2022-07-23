var expect = chai.expect;

describe("War Game", function() {
    describe("#dealCards", function() {
        it("Should create an array holding 52 cards in total and a size array of 2", function() {
            let fd = new CardDeck();
            let x = fd.deck.length;
            expect(x).to.equal(2);
        });
        it("Should throw an error if the length of the array isn't 2", function() {
            expect(function() {
                fd.deck.length;
            }).to.throw(Error);
        });
    });
});