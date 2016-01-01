var setWordCase = require('./setWordCase');
var addNewline = require('./addNewline');
var property = require('./property');
var wrap = require('./wrap');
var last = require('./last');

module.exports = function (path) {
  var fileName = last(path.split('/'))
  var title = fileName
    .replace(/\.\w{2,4}$/, '')
    .split('-')
    .map(setWordCase)
    .join(' ')

  var properties = [
    property('layout', 'page'),
    property('title', title),
    property('permalink', path.replace(/\.md$/, '/'))
  ]

  return addNewline(wrap('---\n', function () {
    return properties.map(addNewline).join('');
  }));
};
