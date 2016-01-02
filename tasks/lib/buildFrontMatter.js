var setWordCase = require('./setWordCase');
var addNewline = require('./addNewline');
var toYAML = require('./toYAML');
var wrap = require('./wrap');
var last = require('./last');

module.exports = function (path, contents, properties) {
  var newProps = properties || {
    layout: 'page',
    title: contents.match(/#\s?(.*)/)[1],
    permalink: path.replace(/\.md$/, '/')
  }

  return addNewline(toYAML(newProps));
};
