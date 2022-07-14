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
