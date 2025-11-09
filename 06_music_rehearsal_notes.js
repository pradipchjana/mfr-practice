// Choir groups practice with sequences:

// ```
// ["mi", "fa", "so"]
// ["do", "mi"]
// ["fa"]
// ```

// Check whether **any** group sang `"do"`.

const containsInAny = (arrayOfArrays, value) => {
    return arrayOfArrays.some(arr => arr.includes(value));
}

console.log(hasAnyThisChoirs([["mi", "fa", "so"], ["do", "mi"], ["fa"]], "do"));
console.log(hasAnyThisChoirs([["mi", "fa"], ["so", "mi"], ["so", "mi", "fa"]], "do"));

