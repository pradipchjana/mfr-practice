// ### **5. Candy Jar Stocking**

// A store logs candy refills like this:

// ```
// [5, 3]
// [2]
// [4, 1]
// ```

// Find the total number of candies added.

const countCandies = (inputArray) => {
  const flatArray = inputArray.flatMap(x => x);
  return flatArray.reduce((value, result) => { return result + value; }, 0);
}

console.log(countCandies([[4], [5, 6, 2, 1], [3, 2]]));
console.log(countCandies([[0], [1, 3, 4], [9], [3, 4]]));

