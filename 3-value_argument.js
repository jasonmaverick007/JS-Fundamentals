import { argv } from 'node:process';

const args = argv.slice(2); // Skip 'node' and script path

if (args.length === 0) {
  console.log('No argument');
} else {
  args.forEach((val) => {
    console.log(`${val}`);
  });
}
