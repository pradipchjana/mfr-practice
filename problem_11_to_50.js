const findUniqueElements = (inputArray) => {
  const flatArray = inputArray.flat();
  return flatArray.filter((value, index) => flatArray.indexOf(value) === index);
};

const containsInAny = (inputArray, value) =>
  inputArray.some(arr => arr.includes(value));

const totalSum = (inputArray) =>
  inputArray.flat().reduce((total, value) => total + value, 0);

const countOccurrences = (array, item) =>
  array.reduce((count, value) => (value === item ? count + 1 : count), 0);

const isAllPosivite = inputArray => inputArray.flat().every(x => x > 0);

const isAllBellow120 = inputArray => inputArray.flat().every(x => x < 120);

const isAnyAbove7 = inputArray => inputArray.flat().some(x => x > 7);

const isAnyEqualTo4 = inputArray => inputArray.flat().some(x => x === 4);

const main = function () {

    console.log("Problem 11", findUniqueElements([
      ["rice", "lentils"],
      ["rice"],
      ["curd", "lentils"]
    ]));
    
    console.log("Problem 12", containsInAny([
      ["mi", "fa", "la"],
      ["do", "mi"],
      ["fa"]
    ], "so"));
    
    console.log("Problem 13", totalSum([
      [4, 6],
      [2, 3, 1],
      [5]
    ]));
    
    console.log("Problem 14", findUniqueElements([
      ["small", "large", "medium", "small"]
    ]));
    
    console.log("Problem 15", countOccurrences(
      ["deer", "deer", "rabbit", "deer"], "deer"
    ));
    
    console.log("Problem 16", findUniqueElements([
      [1, 2],
      [3],
      [2, 4, 1]
    ]));
    
    console.log("Problem 17", containsInAny([
      ["step", "tap"],
      ["turn", "step"]
    ], "turn"));
    
    console.log("Problem 18", totalSum([
      [1, 2, 1],
      [3],
      [2]
    ]));
    
    console.log("Problem 19", totalSum([
      [3, 2],
      [1],
      [4]
    ]));
    
    console.log("Problem 20", findUniqueElements([
      ["apple", "banana"],
      ["apple"],
      ["apple", "orange"]
    ]));
    
    console.log("Problem 21", totalSum([
      [2, 3],
      [1],
      [3, 2]
    ]));
    
    console.log("Problem 22", findUniqueElements([
      ["Inception", "Dunkirk"],
      ["Interstellar"],
      ["Inception"]
    ]));
    
    console.log("Problem 23", findUniqueElements([
      ["A", "B", "A", "C", "B"]
    ]));
    
    console.log("Problem 24", countOccurrences(
      [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]].flat(),
      "chocolate"
    ));
    
    console.log("Problem 25", findUniqueElements([
      ["rose", "lily"],
      ["lily", "tulip"]
    ]));
    
    console.log("Problem 26", totalSum([
      [10, 20],
      [5],
      [15, 10]
    ]));
    
    console.log("Problem 27", findUniqueElements([
      ["A", "B"],
      ["B", "C"],
      ["A"]
    ]));
    
    console.log("Problem 28", totalSum([
      [12, 10],
      [5],
      [8, 7]
    ]));
    
    console.log("Problem 29", isAllPosivite([[3, 4], [5, 2], [1]]));
    
    console.log("Problem 30", totalSum([
      [4, 3],
      [2],
      [3, 1]
    ]));
    
    console.log("Problem 31", findUniqueElements([
      ["idli", "vada"],
      ["vada", "upma"]
    ]));
    
    console.log("Problem 32", findUniqueElements([
      ["sunset", "bird"],
      ["river"],
      ["sunset"]
    ]));
    
    console.log("Problem 33", isAllBellow120([[110, 115], [118], [109]]));
    
    console.log("Problem 34", totalSum([
      [2, 3, 2],
      [1],
      [4]
    ]));
    
    console.log("Problem 35", countOccurrences(
      ["track1", "track2", "track1"],
      "track1"
    ));
    
    console.log("Problem 36", findUniqueElements([
      ["chess", "bread"],
      ["tomato"],
      ["bread"]
    ]));
    
    console.log("Problem 37", findUniqueElements([
      ["sky", "blue"],
      ["night"],
      ["sky", "dark"]
    ]));
    
    console.log("Problem 38", findUniqueElements([
      ["toy", "sticker"],
      ["candy", "sticker"]
    ]));
    
    console.log("Problem 39", totalSum([
      [6, 4],
      [3, 2]
    ]));
    
    console.log("Problem 40", isAnyAbove7([[5, 6], [7], [6]]));
    
    console.log("Problem 41", totalSum([
      [1, 2, 3],
      [2]
    ]));
    
    console.log("Problem 42", findUniqueElements([
      ["Tom", "Jerry"],
      ["Jerry", "Spike"]
    ]));
    
    console.log("Problem 43", findUniqueElements([
      ["Vega", "Sirius"],
      ["Vega", "Rigel"]
    ]));
    
    console.log("Problem 44", totalSum([
      [10, 12],
      [15]
    ]));
    
    console.log("Problem 45", totalSum([
      [3, 5],
      [2, 1]
    ]));
    
    console.log("Problem 46", findUniqueElements([
      ["mint", "ginger"],
      ["lemon"],
      ["mint"]
    ]));
    
    console.log("Problem 47", isAnyEqualTo4([[2, 3], [1], [4, 2]]));
    
    console.log("Problem 48", findUniqueElements([
      ["pencil", "charcoal"],
      ["ink"],
      ["pencil"]
    ]));
    
    console.log("Problem 49", totalSum([
      [1, 1, 2],
      [2, 1]
    ]));
    
    console.log("Problem 50", findUniqueElements([
      ["salt", "pepper"],
      ["turmeric"],
      ["salt"]
    ]));
}

main();