// ### **10. Library Return Counter**

// Books returned:

// ```
// ["Dune", "Dune", "Foundation", "Dune"]
// ```

// Count how many times “Dune” was returned.

const isDune = (count, value) => {
  return value === "Dune" ? count + 1 : count;
};

const countDuneReturns = (inputArray) => {
  return inputArray.reduce(isDune, 0);
};

console.log(countDuneReturns(["Dune", "Dune", "Foundation", "Dune"]));
console.log(countDuneReturns(["Dune", "Dune"]));