// exercise 1.1

function temp1 () {
    let tempe = (Math.random()*30)-5;
    console.log(tempe);
    let tempeRounded = Math.round(tempe);
    console.log(tempeRounded);
    if (tempeRounded >= 10) {
        console.log("The weather is moderate.");
    } else {
        console.log("The weather is cold");
    }
};

temp1();

temp1();

temp1();


// exercise 1.2

let favouriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood (foods) {
    let choice = Math.round(Math.random()*3);
    console.log(choice);
    return foods[choice];
};

console.log(randomFood(favouriteFoods));

console.log(randomFood(favouriteFoods));

console.log(randomFood(favouriteFoods));

//  exercise 1.3

// function crystalGazer() {
//     let jobTitle = prompt("Name a job title:");
//     let location = prompt("Name a geographical location:");
//     let partnerName = prompt("Name a possible partner's first name:");
//     let numberOfChildren = prompt("Say a whole number:");
//     alert(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`);
// }

// crystalGazer();

// exercise 1.4

function ageCalculator1(birthYear, currentYear) {
    let age = currentYear - birthYear;
    console.log(`Your age is either ${age - 1} or ${age}`);
};

ageCalculator1(1977, 2024);

ageCalculator1(1912, 2024);

ageCalculator1(1999, 2024);

// exercise 1.5

function ageCalculator2(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    console.log(`Your age is either ${age - 1} or ${age}`);
};

ageCalculator2(1977);

ageCalculator2(1912);

ageCalculator2(1999);

//  exercise 1.6

function degreeToRadians(degree) {
    let radians = degree * Math.PI / 180;
    console.log(`${degree} degrees are ${radians} radians.`);
};

degreeToRadians(10);

degreeToRadians(90);

degreeToRadians(45);

degreeToRadians(60);

degreeToRadians(180);

degreeToRadians(360);

degreeToRadians(0);

// exercise 1.7

function box (width, height, depth) {
    console.log(`The box has the width ${width}, the height ${height} and the depth ${depth}`);
    let area = width * depth * 2 + width * height * 2 + height * depth * 2;
    let volume = width * height * depth;
    console.log(`The area of the box is: ${area}`);
    console.log(`The volume of the box is: ${volume}`);
};

box(15, 20, 34);

box(5, 10, 340);

box(9, 220, 3994);

box(1, 20000, 50);

box(30344, 75470, 23477);

box(1, 1, 1);

box(1235, 270, 134);

// from rafael braga
// Define arrays with different parts of the sentence
// const subjects = [
//     "My therapist told me",
//     "In my will, I left all my money to",
//     "I can't believe I said this, but",
//     "Last night, I dreamt about",
//     "The worst birthday gift I ever received was"
//   ];
  
//   const actions = [
//     "eating a bag of spiders",
//     "taking over the world with a rubber duck",
//     "singing karaoke at a funeral",
//     "sending my ex a love letter in invisible ink",
//     "training squirrels to commit petty crimes"
//   ];
  
//   const endings = [
//     "and now I'm on a government watchlist.",
//     "and my neighbor won't stop laughing.",
//     "and somehow I ended up in jail.",
//     "because, well, Mondays are hard.",
//     "and now my mom won't return my calls."
//   ];
  
//   // Function to randomly select a phrase part
//   function getRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }
  
//   // Function to generate the random phrase
//   function generateRandomPhrase() {
//     const subject = getRandomElement(subjects);
//     const action = getRandomElement(actions);
//     const ending = getRandomElement(endings);
//     return `${subject} ${action} ${ending}`;
//   }
  
//   // Generate and log the random phrase
//   console.log(generateRandomPhrase());

