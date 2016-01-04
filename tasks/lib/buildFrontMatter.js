var setWordCase = require('./setWordCase');
var addNewline = require('./addNewline');
var toYAML = require('./toYAML');
var wrap = require('./wrap');
var last = require('./last');

var getTitle = function (contents) {
  var m = contents.match(/#\s?(.*)/)
  if (m) return m[1]
};

module.exports = function (path, contents, properties) {
  var newProps = properties || {
    layout: 'page',
    title: getTitle(contents),
    permalink: path.replace(/\.md$/, '/')
  }

  return addNewline(toYAML(newProps));
};
