const data = ["a", "b", "c", "c", "d", "b", "b", "a", "b", "c", "b"];

const countOccurrences = (occurrences, target) => {
  const element = occurrences.find((x) => x[0] === target);
  if (element) {
    element[1] += 1;
    return occurrences;
  }
  occurrences.push([target, 1]);
  return occurrences;
};

const frequencieTable = (occurrences, target) => {
  if (!(target in occurrences)) {
    occurrences[target] = 0;
  }
  occurrences[target]++;
  return occurrences;
};

const findFrequencies = (array) => array.reduce(countOccurrences, []);
const findFrequencieTable = (array) => array.reduce(frequencieTable, {});

console.log(findFrequencies(data));
console.log(findFrequencieTable(data));
