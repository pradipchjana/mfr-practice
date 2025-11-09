// ### **8. Fitness Tracker Miles**

// Runner logs:

// ```
// [2, 3, 2]
// [4]
// [1, 1]
// ```

// Find the total miles run.

const findTotalMile = (inputArray) => {
    const flatArray = inputArray.flat();
    return flatArray.reduce((mile, result) => result + mile, 0);
}

console.log(findTotalMile([[2,3,3],[4],[1,1]]));
