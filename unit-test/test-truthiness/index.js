const isEven = (num) => {
  return num % 2 == 0;
}

const isOdd = (num) => {
  return Math.abs(num % 2) == 1;
}

module.exports = {
  isEven,
  isOdd
};