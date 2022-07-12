var expect = chai.expect; //import chai import method - created a variable that will import chai import method

describe("MyFunctions", function() { //describe is going to take a name we give it "MyFunctions" - for the unit test we are setting up. followed by the 2nd parameter of the actual function that will facitilate the test
    describe("#doSomething", function() { //create another call to describe that will test our doSomething Function -  you can put multiple describe methods to test multiple functions
        it("should concatenate the two parameters", function() { // what should happen - it should.....
            var x = doSomething("Hello", 5); //this is a call to our function.
            expect(x).to.equal("Hello5"); //this displays what we should expect the result to be
        });

        it("should throw an error if first parameter is not a string", function() {
            expect(function() {
                doSomething(5, 5);
            }).to.throw(Error);
        })
    });
});