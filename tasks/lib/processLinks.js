var fs = require('fs');

module.exports = function (paths) {
  paths.forEach(function (p) {
    console.log('Updating', p);

    var contents = fs.readFileSync(p, 'utf-8');
    var newContents = contents.replace(/(\[.*\])\((.*)\)/g, function (m1, m2, m3) {
      return m2 + '(' + m3.replace(/\.md$/, '') + ')';
    })

    fs.writeFileSync(p, newContents);
  });
};
