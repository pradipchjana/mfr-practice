// Choir groups practice with sequences:

// ```
// ["mi", "fa", "so"]
// ["do", "mi"]
// ["fa"]
// ```

// Check whether **any** group sang `"do"`.

const hasAnyThisChoirs = (inputArray, choirName) => {
    return inputArray.some((choir) => choir.includes(choirName));
}

console.log(hasAnyThisChoirs([["mi", "fa", "so"], ["do", "mi"], ["fa"]], "do"));
console.log(hasAnyThisChoirs([["mi", "fa"], ["so", "mi"], ["so", "mi", "fa"]], "do"));

