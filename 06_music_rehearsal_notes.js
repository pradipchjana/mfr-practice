// Choir groups practice with sequences:

// ```
// ["mi", "fa", "so"]
// ["do", "mi"]
// ["fa"]
// ```

// Check whether **any** group sang `"do"`.

const hasAnyDOChoirs = (inputArray) => {
    return inputArray.some((choir) => choir.includes("do"));
}

console.log(hasAnyDOChoirs([["mi", "fa", "so"], ["do", "mi"], ["fa"]]));
console.log(hasAnyDOChoirs(["mi", "fa"], ["so", "mi"], ["so", "mi", "fa"]));

