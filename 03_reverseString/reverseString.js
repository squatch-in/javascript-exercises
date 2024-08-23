const reverseString = function (text) {
  const char = text.split("");
  const reversed = char.reverse();
  const bWord = reversed.toString().replace(/,/g, "");
  return bWord;
};

console.log(reverseString("hello"));

// console.log(word.toString().replace(/,/g, ""));

// Do not edit below this line
module.exports = reverseString;
