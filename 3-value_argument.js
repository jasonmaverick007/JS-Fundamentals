const { argv } = require('node:process');

const args = argv.slice(2, 3); // Skip 'node' and script path

if (args.length === 0) {
  console.log('No arguments provided.');
} else {
  args.forEach((val) => {
    console.log(`${val}`);
  });
}
