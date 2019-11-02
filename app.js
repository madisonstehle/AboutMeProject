'use strict';

// This line of code was to test that the js was linked to the html
// console.log('This works!');

var userName = prompt('Hi there! What is your name?');
//console.log('userName: ', userName)
alert('Thanks for coming to my About Me page, ' + userName + '! Lets do a quiz about me!');


//Question One
function questionOne(bornInSeattle){

  var bornInSeattle = prompt('Was I born and raised in Seattle?');
  //console.log(bornInSeattle);
  bornInSeattle = bornInSeattle.toLowerCase();
  
  if (bornInSeattle === 'yes' || bornInSeattle === 'y') {
    //console.log('Wrong');
    alert('Not quite! I was actually born in Louisiana, moved to Missouri and went to college, then picked up and moved to Seattle!');
  } else {
    //console.log('Right');
    alert('Bingo, you are right! I was actually born in Louisiana, moved to Missouri and went to college, then picked up and moved to Seattle!');
  }
  return bornInSeattle;
}
questionOne();

//Question Two
function questionTwo(havePets) {

  var havePets = prompt('Do I have any pets?');
  //console.log(havePets);
  havePets = havePets.toLowerCase();
  
  if (havePets === 'yes' || havePets === 'y') {
    //console.log('Right');
    alert('You got it! I have two cats named Friedrich and Jacques.');
  } else {
    //console.log('Wrong');
    alert('Almost! I have two cats named Friedrich and Jacques.');
  }
  return havePets;
}
questionTwo();

//Question Three
function questionThree(preferredSandwich){

  var preferredSandwich = prompt('Do I prefer a chicken salad sandwich to a grilled cheese?');
  //console.log(preferredSandwich);
  preferredSandwich.toLowerCase();
  
  if (preferredSandwich === 'yes' || preferredSandwich === 'y') {
    //console.log('Wrong');
    alert('Nope! I am actually a vegetarian, so chicken salad is not ideal for me!');
  } else {
    //console.log('Right');
    alert('Absolutely! I am actually a vegetarian, so chicken salad is not ideal for me!');
  }
  return preferredSandwich;
}
questionThree();

//Question Four
function questionFour(doLift){

  var doLift = prompt('Do I even lift? (or - do I exercise frequently?)');
  //console.log(doLift);
  doLift.toLowerCase();
  
  if (doLift === 'yes' || doLift === 'y') {
    //console.log('Wrong');
    alert('I wish you were right! I definitely need to exercise more than just walking to my bus stop!');
  } else {
    //console.log('Right');
    alert('Yeah, you right. I definitely need to exercise more than just walking to my bus stop!');
  }
  return doLift;
}
questionFour();

//Question Five
function questionFive(bandGeek){

  var bandGeek = prompt('Am I more of a band geek than a history buff?');
  //console.log(bandGeek);
  bandGeek.toLowerCase();
  
  if (bandGeek === 'yes' || bandGeek === 'y') {
    //console.log('Right');
    alert('You are correct! I love playing music. My favorite instruments to play are the piano and the marimba. My history knowledge is pretty rusty at best.');
  } else {
    //console.log('Wrong');
    alert('Not so much. I love playing music. My favorite instruments to play are the piano and the marimba. My history knowledge is pretty rusty at best.');
  }
  return bandGeek;
}
questionFive();

//Question Six
function questionSix(userDateGuess){

  var userDateGuess = prompt('guess a number'); //user guess
  console.log(typeof userDateGuess);
  userDateGuess = parseFloat(userDateGuess);
  console.log(typeof userDateGuess);
  
  var numberGuesses = 0; 
  
  while (numberGuesses !== 3){
    console.log('Actual Guess: ', userDateGuess);
    console.log(typeof userDateGuess);
    if (userDateGuess === 2) {
      alert('yay, right!');
      numberGuesses = 3;
    } else if (userDateGuess > 2){
      userDateGuess = prompt('too high!');
      userDateGuess = parseFloat(userDateGuess);
      numberGuesses++;
    } else if (userDateGuess < 2) {
      userDateGuess = prompt('too low!');
      userDateGuess = parseFloat(userDateGuess);
      numberGuesses++;
    } else {
      userDateGuess = prompt('no. number plz');
      userDateGuess = parseFloat(userDateGuess);
      numberGuesses++;
    }
    console.log('Guess number: ', numberGuesses);
  }
  return userDateGuess;
}
questionSix();

alert('I was born on the 2nd day of March!');

//Question Seven
var bookArray = ['fearless', 'the book thief', 'cloud atlas', 'the tale of despereaux', 'i, robot', 'the left hand of darkness', 'moonlight & vines', 'the hitchhiker\'s guide to the galaxy', 'house of leaves', 'the end of eternity']
var nameBook = prompt('What is one of my top ten favorite books? You have 6 guesses!').toLowerCase();
var nameBook = nameBook.toLowerCase();
var bookGuesses = 6

while(bookGuesses > 0) {
  for(var i = 0; i < bookArray.length; i++){
    if(nameBook === bookArray[i]){
      alert('You got it!');
      bookGuesses = 0;
    }
  }
  bookGuesses--;
  if(bookGuesses !== 0 && bookGuesses !== -1){
    nameBook = prompt('Nope, good guess though! Try again.');
  } else if (bookGuesses === 0){
    alert('All the possible correct answers are: Fearless, The Book Thief, Cloud Atlas, The Tale of Despereaux, I Robot, The Left Hand of Darkness, Moonlight & Vines, The Hitchhiker\'s Guide to the Galaxy, House of Leaves, and The End of Eternity');
  } else if (bookGuesses === -1){
    alert('Hooray! All the possible correct answers are: Fearless, The Book Thief, Cloud Atlas, The Tale of Despereaux, I Robot, The Left Hand of Darkness, Moonlight & Vines, The Hitchhiker\'s Guide to the Galaxy, House of Leaves, and The End of Eternity');    
  }
}


alert('Thanks for playing, ' + userName + '! You can read on for some more info about me!');