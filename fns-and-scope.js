//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.


function isTyler(a) {
    if (a === 'Tyler') {
        return true;
    } else {
        return false;
    }
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
    var name = prompt('What\'s your name?');
    return name;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
    var name = getName();
    alert('Welcome, ' + name);
}

//Next problem




//What is the difference between arguments and parameters?

parameter is used when defining the function, argument is what you pass into the function when calling it.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


0, null, undefined, NaN, "", false
if(!var) {}


//Next Problem



//Create a function called myName that returns your name

function myName() {
    return 'Scott';
}

//Now save the function definition of myName into a new variable called newMyName

  newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
    return function() {
        return 'Scott';
    }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();?