const topTwo = (topTwoElements, element) => {
  if (element > topTwoElements[0]) return [element, topTwoElements[0]];
  if (element > topTwoElements[1]) return [topTwoElements[0], element];
  return topTwoElements;
};

const findTopTwoElements = (array) =>
  array.reduce(topTwo, [-Infinity, -Infinity]);

console.log(findTopTwoElements([1, 3, 4, 8, 9, 2, 5]));
console.log(findTopTwoElements([7, 6, 5, 4, 3, 2, 1]));
