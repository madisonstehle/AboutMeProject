'use strict';

// This line of code was to test that the js was linked to the html
// console.log('This works!');

var bornInSeattle = prompt('Was I born and raised in Seattle?');
console.log(bornInSeattle);
bornInSeattle = bornInSeattle.toLowerCase();

if (bornInSeattle === 'yes' || bornInSeattle === 'y') {
    console.log('Wrong');
 //   alert('Not quite! I was actually born in Louisiana, moved to Missouri and went to college, then picked up and moved to Seattle!');
} else {
    console.log('Right');
 //   alert('Bingo, you are right! I was actually born in Louisiana, moved to Missouri and went to college, then picked up and moved to Seattle!');
}

var havePets = prompt('Do I have any pets?');
console.log(havePets);
havePets = havePets.toLowerCase();

if (havePets === 'yes' || havePets === 'y') {
    console.log('Right');
    // alert('You got it! I have two cats named Friedrich and Jacques.');
} else {
    console.log('Wrong');
    //alert('Almost! I have two cats named Friedrich and Jacques.');
}
