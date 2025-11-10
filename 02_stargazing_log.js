// ### **2. Stargazing Log**

// A stargazing club logs visible constellations from each night:

// ```
// ["Orion", "Leo"]
// ["Taurus"]
// ["Orion", "Gemini"]
// ```

// Combine everyone’s observations into one list of all constellations spotted.

const combineObservations = x => {
  return x.flatMap(x => x);
}

console.log(combineObservations([["n", "Leo"],
["Taurus"],
["Orion", "Gemini"]]));

