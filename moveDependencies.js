const fs = require('fs');
const package = require('./package.json');
const templateBase = require('./templateBase.json');

const finalTemplate = {
  package: {
    ...templateBase.package,
    dependencies: {
      ...package.dependencies,
    },
    devDependencies: {
      ...package.devDependencies,
    },
  },
};

fs.writeFileSync('template.json', JSON.stringify(finalTemplate, null, 2));
