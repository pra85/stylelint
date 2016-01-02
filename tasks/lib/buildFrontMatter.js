var setWordCase = require('./setWordCase');
var addNewline = require('./addNewline');
var toYAML = require('./toYAML');
var wrap = require('./wrap');
var last = require('./last');

module.exports = function (path, properties) {
  var newProps = properties || {
    layout: 'page',
    title: last(path.split('/'))
      .replace(/\.\w{2,4}$/, '')
      .split('-')
      .map(setWordCase)
      .join(' '),
    permalink: path.replace(/\.md$/, '/')
  }

  return addNewline(toYAML(newProps));
};
