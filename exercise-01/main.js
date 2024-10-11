console.log("Part 1 - functions, array algorithms");

const array = [23, 4, 624, 43, 76, 1234, 53, 5];
console.log(array);

function maxInArray(array) {
  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return maxValue;
}
console.log(maxInArray(array));