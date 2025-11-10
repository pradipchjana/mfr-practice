// ### **3. Birdwatching Duplicate Removal**

// A birdwatcher notes species seen during a morning walk:

// ```
// ["sparrow", "crow", "sparrow", "eagle", "crow"]
// ```

// Create a list of the species without repeats, preserving the order first seen.

const removeDuplicate = (array) => {
  return array.filter((element, index) => array.indexOf(element) === index);
}

console.log(removeDuplicate(["sparrow", "crow", "sparrow", "eagle", "crow"]))