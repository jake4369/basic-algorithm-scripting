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

// Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  //   let resultingStr = "";
  //   for (let i = 0; i < num; i++) {
  //     resultingStr += str;
  //   }
  //   return resultingStr;

  return num > 0 ? (str += repeatStringNumTimes(str, num - 1)) : "";
}

// Truncate a String
function truncateString(str, num) {
  return str.length > num ? `${str.slice(0, num)}...` : str;
}

// Finders Keepers
function findElement(arr, func) {
  //   let num = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     num = arr[i];
  //     if (func(num)) {
  //       return num;
  //     }
  //   }

  return arr.find(func);
}

// Boo who
function booWho(bool) {
  return typeof bool == "boolean";
}

// Title Case
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
