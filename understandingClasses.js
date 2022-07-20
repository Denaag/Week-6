//It might help to remember that classes don't have information. Objects do. 
//And if you want information on an object (like the object in the player1 variable) you need to use a dot and access properties on that object

//And remember that methods are functions attached to an object, not to a class. 
//The class is just a blueprint of what functions will be attached to any objects made with that class

//And you can access the properties on an object anytime you have access to that object.

// If I put a player object in a global variable I can access it anywhere
const player1 = new Player();

const someFunction = () => {
    // If I put a player object in a variable inside a function it will only be accessible while the function is running
    // A new player object will get created and temporarily put in the player2 variable every time this function runs
    const player2 = new Player()
    // I can access the player1 object here and get any properties or run any methods
    console.log(player1.name)
    // I can access the player2 object here and get any properties or run any methods
    console.log(player2.score)
}

class SomeThing {
    constructor() {
        // If I put a player object in a property, it will be accessible anywhere the object created with this class is accessible
        // A new player object will get created every time a SomeThing object is created
        this.player3 = new Player()
        // I can access the player1 object here and get any properties or run any methods
        console.log(player1.name)
        // I can access the player3 object here and get any properties or run any methods
        console.log(this.player3.name)
    }

    someMethod() {
        // I can access the player1 object here and get any properties or run any methods
        console.log(player1.name)
        // I can access the player3 object here and get any properties or run any methods
        console.log(this.player3.name)
    }
}

const someThing1 = new SomeClass()
const someThing2 = new SomeClass()
// I can access the player1 object here and get any properties or run any methods
console.log(player1.name)
// I can access the player3 object created with the someThing1 object here and get any properties or run any methods
console.log(someThing1.player3.name)
// I can access the entirely different player3 object created with the someThing2 object here and get any properties or run any methods
console.log(someThing2.player3.name)