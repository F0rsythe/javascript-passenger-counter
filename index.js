// document.getElementById("count").innerText = 5; 
// let count = 0999; //variable declaration
// let myAge = 19;
// console.log(count);
// console.log(myAge);

let count = 0;
let saveEl = document.getElementById("save-el")
function increment() //function is to increase the value of count by 1 everytime button is pressed
{
    count +=1;
    document.getElementById("count").innerText = count;
}

function save()
{
    let counter = count + " - "
    saveEl.textContent += counter ;
    count = 0;
    document.getElementById("count").innerText = count; 
}

//Create a variable, message that stores the string "You have 3 new messages"
let message = "You have three new messages";
let username = "Danny";
let messageToUser = username + ", " + message + "!"
//console.log(messageToUser)


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let name = "Danny";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;

let welcomeEl = document.getElementById("welcome-el");
let name1 = "Danny";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name1;
welcomeEl.innerText = myGreeting;


console.log(myGreeting);
welcomeEl.innerText = welcomeEl.innerText + "👋";
