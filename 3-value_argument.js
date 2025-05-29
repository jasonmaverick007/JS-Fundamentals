const { argv } = require('node:process');

const args = argv.slice(2, 3); // Skip 'node' and script path

if (args == 0) {
  console.log('No argument');
} else {
  args.forEach((val) => {
    console.log(`${val}`);
  });
}
