// Factorialize a Number
function factorialize(num) {
  //   if (num < 0) {
  //     return -1;
  //   } else if (num == 0) {
  //     return 1;
  //   } else {
  //     return (num * factorialize(num - 1))
  //   }
  return num < 0 ? -1 : num == 0 ? 1 : num * factorialize(num - 1);
}

// Find the Longest Word in a String
function findLongestWordLength(str) {
  let count = 0;
  str.split(" ").forEach((word) => {
    if (word.length > count) {
      count = word.length;
    }
  });
  return count;
}

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]));
  }
  return result;
}
