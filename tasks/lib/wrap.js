module.exports = function (str, fn) {
  return str + fn() + str;
}
