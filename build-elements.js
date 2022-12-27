const fs = require('fs-extra');
const concat = require('concat');

const target = process.argv.slice(2) || 'es2017';

(async function build() {
  console.info(`Building elements for ${target}...`);

  const files = [
    `./dist/elements-build/polyfills.js`,
    `./dist/elements-build/runtime.js`,
    `./dist/elements-build/main.js`,
  ];

  await fs.ensureDir('./dist/elements');

  await concat(files, './dist/elements/chat-widget.js');

  await fs.copy('./demo.html', './dist/elements/index.html');

  console.info('Elements created successfully!');
})();
