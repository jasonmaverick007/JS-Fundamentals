const arg1 = process.argv[2];
const num = parseInt(arg1, 10);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}
