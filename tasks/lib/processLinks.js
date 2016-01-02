var fs = require('fs');

module.exports = function (paths) {
  paths.forEach(function (p) {
    console.log('Updating', p);

    var contents = fs.readFileSync(p, 'utf-8');
    var newContents = contents.replace(/(\.md)(\))/g, '$2')

    fs.writeFileSync(p, newContents);
  });
};
