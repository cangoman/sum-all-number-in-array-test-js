function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0;
  for (let i of array) {
    if (Array.isArray(i)) {
      total += sumItems(i);
    } else
      total += i;
  }
  return total;
}

module.exports = sumItems;

