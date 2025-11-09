const findUniqueElement = (inputArray) => {
    const flatArray = inputArray.flat();
    return flatArray.filter((value, index) => flatArray.indexOf(value) === index);
}

const containsInAny = (inputArray, value) =>
    inputArray.some(arr => arr.includes(value));

const totalSum = (inputArray) => {
    return inputArray.flat().reduce((total, value) => total + value, 0);
}

const countOccurrences = (array, item) =>
    array.reduce((count, value) => (value === item ? count + 1 : count), 0);

// 11. Produce a list of distinct ingredients.

const findListOfDistinctIngredients = (inputArray) => {
    return findUniqueElement(inputArray);
}

console.log(
    "Problem 11",
    findListOfDistinctIngredients(
        [["rice", "lentils"],
        ["rice"],
        ["curd", "lentils"]]
    )
);

// 12 Singers produce sequences: Check whether any group sang `"so"`.

const hasAnyThisChoirs = (inputArray, choirName) => {
    return containsInAny(inputArray, choirName);
}

console.log("problem 12", hasAnyThisChoirs([["mi", "fa", "la"], ["do", "mi"], ["fa"]], "so"));
console.log("problem 12", hasAnyThisChoirs([["la", "la"], ["so", "mi"], ["so", "mi", "la"]], "so"));

// ### **13. Vegetable Crate Totals** Find the sum of all weights.

console.log("Problem 13", totalSum([[4, 6], [2, 3, 1], [5]]));

// ### **14. Post Office Parcel Record** Find unique parcel sizes.

const findUniqueParcelSize = (array) => {
    return array.filter((element, index) => array.indexOf(element) === index);
}

console.log(findUniqueParcelSize(["small", "large", "medium", "small"]));

// ### **15. Wildlife Sighting Count**
// Count how many times “deer” was seen.

const countDear = (inputArray) =>
    inputArray.reduce((count, value) => (value === "deer" ? count + 1 : count), 0);

console.log(countDear(["deer", "deer", "rabbit", "deer"]));

// ### **16. Study Group Completion** Find all chapters completed by any group.

console.log("Problem 16", findUniqueElement([[1, 2], [3], [2, 4, 1]]));

// ### **17. Dance Class Steps** Check if `"turn"` appears in any sequence.

console.log("Problem 17", containsInAny([["step", "tap"], ["turn", "step"]], "turn"));

// ### **18. Garden Watering Amount** Total amount of water used.

console.log("Problem 18", totalSum([[1, 2, 1], [3], [2]]));

// ### **19. Paper Crane Making** Compute the total cranes.

console.log("Problem 19", totalSum([[3, 2], [1], [4]]));

// ### **20. Fruit Basket Inventory** List unique fruits used.

console.log("Problem 20", findUniqueElement([["apple", "banana"], ["apple"], ["apple", "orange"]]));

// ### **21. Classroom Pen Distribution** Total pens handed out.

const totalPenHandedOut = (inputArray) => totalSum(inputArray);

console.log("Problem 21", totalPenHandedOut([[2, 3], [1], [3, 2]]));

// ### **22. Movie Marathon Titles** List unique titles watched.

const watchedMovies = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]]
const findUniqueMovieWatched = inputArray => findUniqueElement(inputArray);
console.log("Problem 22", findUniqueMovieWatched(watchedMovies));


// ### **23. Name Badge Sorting** Create a unique list of attendees.

const studentsSign = ["A", "B", "A", "C", "B"];
const uniqueSigns = inputArray => findUniqueElement(inputArray);
console.log("Problem 23", uniqueSigns(studentsSign));

// ### **24. Ice Cream Orders** Find how many orders were `"chocolate"`.

const recorderOrders = [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]]
const chocolateOcurances = (inputArray, item) => countOccurrences(inputArray.flat(), item);
console.log(chocolateOcurances(recorderOrders, "chocolate"));

// ### **25. Flowers in Bouquets** List all unique flowers used.

const bouquets = [["rose", "lily"], ["lily", "tulip"]];
const listUniqueFlowers = inputArray => findUniqueElement(inputArray);
console.log("Problem 25", listUniqueFlowers(bouquets));

// ### **26. Morning Exercise Count Total repetitions done.

const repetitions = [[10, 20], [5], [15, 10]];
const totalRepetitions = inputArray => totalSum(inputArray);
console.log("Problem 26", totalRepetitions(repetitions));

// ### **27. Train Station Announcements** Find the station names without repeats.

const announcedStations = [["A", "B"], ["B", "C"], ["A"]];
const findUniqueStations = inputArray => findUniqueElement(inputArray);
console.log("Problem 27", findUniqueStations(announcedStations));

// ### **28. Book Club Pages Read** Find total pages read.

const readPages = [[12, 10], [5], [8, 7]];
const findTotalPagesRead = inputArray => totalSum(inputArray);
console.log("Problem 28", findTotalPagesRead(readPages));

// ### **29. Rainfall Data Check** Check if all values are positive.

const measurements = [[3, 4], [5, 2], [1]];
const isAllPositive = inputArray => inputArray.flat().every(x => x > 0);
console.log("Problem 29", isAllPositive(measurements));

// ### **30. Fruit Stand Weight Totals**

// Weights:

// ```
// [4, 3]
// [2]
// [3, 1]
// ```

// Compute total weight.

const weights =[[4,3],[2],[3,1]];
const totalweight = inputArray => totalSum(inputArray);
console.log("Problem 30", totalweight(weights));


// ### **31. School Snack List**

// Snacks:

// ```
// ["idli", "vada"]
// ["vada", "upma"]
// ```

// Unique snacks served.

// ### **32. Photo Contest Entries**

// Photographers submit sets:

// ```
// ["sunset", "bird"]
// ["river"]
// ["sunset"]
// ```
// List unique themes.

// ### **33. Electricity Reading Validation**
// Readings:
// ```
// [110, 115]
// [118]
// [109]
// ```
// Check if all readings are below 120.

// ### **34. Jogging Lap Count**
// Laps:
// ```
// [2, 3, 2]
// [1]
// [4]
// ```
// Compute total laps.

// ### **35. Music Playlist Repeats**
// Songs played:
// ```
// ["track1", "track2", "track1"]
// ```
// Count occurrences of `"track1"`.

// ### **36. Café Order Ingredients**
// Ingredients:
// ```
// ["cheese", "bread"]
// ["tomato"]
// ["bread"]
// ```
// Unique ingredients needed.

// ### **37. Student Poetry Words**
// Word lists:
// ```
// ["sky", "blue"]
// ["night"]
// ["sky", "dark"]
// ```
// List all unique words.

// ### **38. Gift Box Items**
// Items:
// ```
// ["toy", "sticker"]
// ["candy", "sticker"]
// ```
// List unique items used.
// ### **39. Gym Routine Count**

// Routine counts:
// ```
// [6, 4]
// [3, 2]
// ```
// Total counts.

// ### **40. Fish Tank Measurements**
// Measurements:
// ```
// [5, 6]
// [7]
// [6]
// ```
// Check if any measurement is above 7.

// ### **41. Candy Distribution**
// Candy numbers:
// ```
// [1, 2, 3]
// [2]
// ```
// Sum all candies.

// ### **42. Workshop Attendance**
// Participants:
// ```
// ["Tom", "Jerry"]
// ["Jerry", "Spike"]
// ```
// List unique participants.

// ### **43. Space Camp Star Names**
// Stars named:
// ```
// ["Vega", "Sirius"]
// ["Vega", "Rigel"]
// ```
// Unique star names.

// ### **44. Train Car Passenger Check**
// Counts:
// ```
// [10, 12]
// [15]
// ```
// Total passengers.

// ### **45. Weekly Grocery Tally**
// Quantities:
// ```
// [3, 5]
// [2, 1]
// ```
// Find the total.

// ### **46. Tea Tasting Flavors**
// Flavors:
// ```
// ["mint", "ginger"]
// ["lemon"]
// ["mint"]
// ```
// Unique flavors.

// ### **47. Photography Exposure Values**
// Values:
// ```
// [2, 3]
// [1]
// [4, 2]
// ```
// Check if any value equals 4.

// ### **48. Drawing Class Tools**
// Tools:
// ```
// ["pencil", "charcoal"]
// ["ink"]
// ["pencil"]
// ```
// Unique tools used.

// ### **49. Coin Collection Tally**
// Coins collected:
// ```
// [1, 1, 2]
// [2, 1]
// ```
// Total coins.

// ### **50. Cooking Class Spices**
// Spices:
// ```
// ["salt", "pepper"]
// ["turmeric"]
// ["salt"]
// ```
// Unique spices.
