const data = ["a", "b", "c", "c", "d", "b", "b", "a", "b", "c", "b"];

const countOccurrences = (occurrences, element) => {
  const frequecyArray = occurrences.find((x) => x[0] === element);
  if (frequecyArray !== undefined) {
    frequecyArray[1] += 1;
    return occurrences;
  }
  occurrences.push([element, 1]);
  return occurrences;
};

const findFrequencies = (array) => array.reduce(countOccurrences, []);

console.log(findFrequencies(data));
