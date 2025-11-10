const countBlueRibon = (array) => {
  return array.filter(function (value) { return value === 'blue' }).reduce(function (count) { return count + 1 }, 0);
}

console.log(countBlueRibon(["red", "blue", "red", "green", "red", "blue"]))
