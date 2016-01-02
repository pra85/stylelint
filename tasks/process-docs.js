var glob = require('glob');
var processIndexes = require('./lib/processIndexes');
var processFrontMatter = require('./lib/processFrontMatter');
var processLinks = require('./lib/processLinks');

var rootFiles = ['index.md', 'CHANGELOG.md', 'CONTRIBUTING.md', 'LICENSE'];
var docFiles = glob.sync('docs/**/*.md');

processFrontMatter(docFiles);
processFrontMatter(rootFiles, {
  layout: 'default'
});

processIndexes(glob.sync('docs/*'));

processLinks(docFiles);
processLinks(rootFiles);
