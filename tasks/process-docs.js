var glob = require('glob');
var processIndexes = require('./lib/processIndexes');
var processFrontMatter = require('./lib/processFrontMatter');
var processLinks = require('./lib/processLinks');

processFrontMatter(glob.sync('docs/**/*.md'));
processFrontMatter(glob.sync('index.md'), {
  layout: 'default'
});

processIndexes(glob.sync('docs/*'));

processLinks(glob.sync('docs/**/*.md'));
processLinks(glob.sync('index.md'));
