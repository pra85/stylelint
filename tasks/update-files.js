var fs = require('fs');
var spawnSync = require('child_process').spawnSync;
var rimraf = require('rimraf');

spawnSync('git', [
  'checkout', 'master', '--',
  'docs', 'src/rules', 'LICENSE', 'CHANGELOG.md', 'CONTRIBUTING.md'
]);

spawnSync('git', [
  'cat-file', 'blob', 'master:README.md', 'src/rules', '>', 'index.md'
]);

spawnSync('git', ['checkout', 'src']);
spawnSync('git', ['reset', 'src']);

rimraf('docs/src', {}, function () {
  fs.renameSync('src', 'docs/src')
  rimraf('docs/src/rules/**/__tests__', {}, function () {})
  rimraf('docs/src/rules/**/*.js', {}, function () {})
})
