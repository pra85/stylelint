var fs = require('fs');

module.exports = function (paths) {
  paths.forEach(function (p) {
    var _path = p.replace('.md', '');

    if ((/\.md$/).test(p) && paths.indexOf(_path) > -1) {
      console.log('Moving', p);

      fs.renameSync(p, _path + '/index.md');
    }
  });
};
