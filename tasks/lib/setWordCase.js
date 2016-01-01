var specialCases = require('./specialCases');

var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = function (word) {
  return specialCases[word] || capitalize(word)
};
