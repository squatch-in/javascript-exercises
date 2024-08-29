const reverseString = function (text) {
  const char = text.split("");
  const reversed = char.reverse();
  const joinArray = reversed.join("");
  return joinArray;
};

console.log(reverseString(``));

// Do not edit below this line
module.exports = reverseString;
