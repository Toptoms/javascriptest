// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time", "it's", "about", "what", "you", "can", "figure", "out.", "-2015", "Chris", "Pine", "Learn", "JavaScript"];
 secretMessage.pop(); // remove Orange (from the end)
 secretMessage.push('to', 'program'); // rajoute un mot
 secretMessage.splice(6, 1, 'right' ); // this is how to remove an item
 secretMessage.shift(); // remove Apple from the front
 secretMessage.unshift('Programming')// add to the front
 secretMessage.splice(5,5, 'know');

console.log(secretMessage.join(' '));// lie les mots du tableau

console.log(secretMessage);