var fs = require('fs');
var glob = require('glob');
var buildFrontMatter = require('./lib/buildFrontMatter');
var prependFrontMatter = require('./lib/prependFrontMatter');

glob.sync('docs/**/*.md').forEach(function (p) {
  console.log('Processing', p);

  var frontMatter = buildFrontMatter(p);
  var contents = fs.readFileSync(p, 'utf-8');
  var newContents = prependFrontMatter(frontMatter, contents);
  fs.writeFileSync(p, newContents);
});

var paths = glob.sync('docs/*')
paths.forEach(function (p) {
  var _path = p.replace('.md', '');

  if ((/\.md$/).test(p) && paths.indexOf(_path) > -1) {
    console.log('Moving', p);

    fs.renameSync(p, _path + '/index.md');
  }
});
