var wrap = require('./wrap');
var addNewline = require('./addNewline');

module.exports = function (obj) {
  var keys = Object.keys(obj);

  var str = keys.map(function (k) {
    return [k, obj[k]].join(': ')
  })
  .map(addNewline)
  .join('')

  return wrap('---\n', function () {
    return str;
  })
};
