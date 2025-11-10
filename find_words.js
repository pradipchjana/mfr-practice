// Write a function that can take an array of sentences and return all 
// the words that start with 'a'(regardless of case)

const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
];

const splitWords = array => array.flatMap(x => x.split(" "));

const findWords = array => splitWords(array)
  .filter(x => x.toUpperCase().startsWith("A"));

console.log(findWords(sentences));
