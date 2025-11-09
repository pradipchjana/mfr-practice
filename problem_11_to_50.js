// 11. Produce a list of distinct ingredients.

const findListOfDistinctIngredients = (inputArray) => {
    const flatArray = inputArray.flat();
    return flatArray.filter((value, index) => flatArray.indexOf(value) === index);
}

console.log(findListOfDistinctIngredients([["rice", "lentils"], ["rice"], ["curd", "lentils"]]));

// 12 Singers produce sequences: Check whether any group sang `"so"`.

const hasAnyThisChoirs = (inputArray, choirName) => {
    return inputArray.some((choir) => choir.includes(choirName));
}

console.log(hasAnyThisChoirs([["mi", "fa", "la"], ["do", "mi"], ["fa"]], "so"));
console.log(hasAnyThisChoirs([["la", "la"], ["so", "mi"], ["so", "mi", "la"]], "so"));

// ### **13. Vegetable Crate Totals** Find the sum of all weights.

const totalCrateWeights = (inputArray) => {
    const flatArray = inputArray.flat()
    return flatArray.reduce((total, value) => total + value, 0);
}

console.log(totalCrateWeights([[4, 6], [2, 3, 1], [5]]));

// ### **14. Post Office Parcel Record** Find unique parcel sizes.

const findUniqueParcelSize = (array) => {
    return array.filter((element, index) => array.indexOf(element) === index);
}

console.log(findUniqueParcelSize(["small", "large", "medium", "small"]));

// ### **15. Wildlife Sighting Count**

// Animal sightings:

// ```
// ["deer", "deer", "rabbit", "deer"]
// ```

// Count how many times “deer” was seen.

// ### **16. Study Group Completion**

// Study groups finish chapters:

// ```
// [1, 2]
// [3]
// [2, 4, 1]
// ```

// Find all chapters completed by any group.

// ### **17. Dance Class Steps**

// Step sequences:

// ```
// ["step", "tap"]
// ["turn", "step"]
// ```

// Check if `"turn"` appears in any sequence.

// ### **18. Garden Watering Amount**

// Water used:

// ```
// [1, 2, 1]
// [3]
// [2]
// ```

// Total amount of water used.

// ### **19. Paper Crane Making**

// Origami students make cranes in sessions:

// ```
// [3, 2]
// [1]
// [4]
// ```

// Compute the total cranes.

// ### **20. Fruit Basket Inventory**

// Mixed fruits recorded:

// ```
// ["apple", "banana"]
// ["apple"]
// ["apple", "orange"]
// ```

// List unique fruits used.

// ### **21. Classroom Pen Distribution**

// Pens given:

// ```
// [2, 3]
// [1]
// [3, 2]
// ```

// Total pens handed out.

// ### **22. Movie Marathon Titles**

// Movies watched:

// ```
// ["Inception", "Dunkirk"]
// ["Interstellar"]
// ["Inception"]
// ```

// List unique titles watched.

// ### **23. Name Badge Sorting**

// Students sign in repeatedly:

// ```
// ["A", "B", "A", "C", "B"]
// ```

// Create a unique list of attendees.

// ### **24. Ice Cream Orders**

// Orders recorded:

// ```
// ["vanilla", "chocolate"]
// ["strawberry"]
// ["chocolate"]
// ```

// Find how many orders were `"chocolate"`.

// ### **25. Flowers in Bouquets**

// Bouquets contain:

// ```
// ["rose", "lily"]
// ["lily", "tulip"]
// ```

// List all unique flowers used.

// ### **26. Morning Exercise Count**

// Repetitions:

// ```
// [10, 20]
// [5]
// [15, 10]
// ```

// Total repetitions done.

// ### **27. Train Station Announcements**

// Stations announced:

// ```
// ["A", "B"]
// ["B", "C"]
// ["A"]
// ```

// Find the station names without repeats.

// ### **28. Book Club Pages Read**

// Groups read pages:

// ```
// [12, 10]
// [5]
// [8, 7]
// ```

// Find total pages read.

// ### **29. Rainfall Data Check**

// Measurements:

// ```
// [3, 4]
// [5, 2]
// [1]
// ```

// Check if all values are positive.

// ### **30. Fruit Stand Weight Totals**

// Weights:

// ```
// [4, 3]
// [2]
// [3, 1]
// ```

// Compute total weight.

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
