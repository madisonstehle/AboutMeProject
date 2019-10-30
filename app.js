'use strict';

// This line of code was to test that the js was linked to the html
// console.log('This works!');

var bornInSeattle = prompt('Was I born and raised in Seattle?');
console.log(bornInSeattle);
bornInSeattle = bornInSeattle.toLowerCase();

if (bornInSeattle === 'yes' || bornInSeattle === 'y') {
    alert('Not quite! I was actually born in Louisiana, moved to Missouri and went to college, then picked up and moved to Seattle!');
} else {
    alert('Bingo, you are right! I was actually born in Louisiana, moved to Missouri and went to college, then picked up and moved to Seattle!');
}