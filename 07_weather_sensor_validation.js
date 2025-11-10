// ### **7. Weather Sensor Validation**

// Several temperature sheets:

// ```
// [22, 23]
// [25, 24, 22]
// [29]
// ```

// Check if **every** recorded temperature is below 32.

const hasAllBellow32Temperature = (inputArray) => {
  const flatArray = inputArray.flat();
  return flatArray.every((temperature) => temperature < 32);
}

console.log(hasAllBellow32Temperature([[22, 23, 12], [24], [29, 22]]));
console.log(hasAllBellow32Temperature([[12], [23, 32]]));

