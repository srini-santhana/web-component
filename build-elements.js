const fs = require('fs-extra');

const concat = require('concat');

(async function build() {
  const files = [
    './dist/heroes/runtime.js',

    './dist/heroes/polyfills.js',

    './dist/heroes/scripts.js',

    './dist/heroes/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/heroes.js');

  await fs.copyFile('./dist/heroes/styles.css', 'elements/styles.css');
})();
