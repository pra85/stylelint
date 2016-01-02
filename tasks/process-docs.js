var fs = require('fs');
var glob = require('glob');
var buildFrontMatter = require('./lib/buildFrontMatter');
var prependFrontMatter = require('./lib/prependFrontMatter');

// Regular docs files
glob.sync('docs/**/*.md').forEach(function (p) {
  console.log('Processing', p);

  var frontMatter = buildFrontMatter(p);
  var contents = fs.readFileSync(p, 'utf-8');
  var newContents = prependFrontMatter(frontMatter, contents);
  fs.writeFileSync(p, newContents);
});

// Docs indexes
var paths = glob.sync('docs/*');
paths.forEach(function (p) {
  var _path = p.replace('.md', '');

  if ((/\.md$/).test(p) && paths.indexOf(_path) > -1) {
    console.log('Moving', p);

    fs.renameSync(p, _path + '/index.md');
  }
});

// Links
glob.sync('docs/**/*.md').forEach(function (p) {
  console.log('Updating', p);

  var contents = fs.readFileSync(p, 'utf-8');
  var newContents = contents.replace(/(\[.*\])\((.*)\)/g, function (m1, m2, m3) {
    return m2 + '(' + m3.replace(/\.md$/, '') + ')';
  })

  fs.writeFileSync(p, newContents);
});
