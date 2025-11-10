// ### **9. Art Workshop Color Variety**

// Paint colors used in sessions:

// ```
// ["blue", "yellow"]
// ["yellow", "green"]
// ["blue"]
// ```

// Find unique colors used.

const findUniqueColor = (inputArray) => {
  const flatArray = inputArray.flatMap(x => x);
  return flatArray.filter((color, index) => flatArray.indexOf(color) === index);
}

console.log(findUniqueColor([["blue", "yellow"], ["yellow", "green"], ["blue"]]));
