let total = 0;

// for (let j = 2; j < process.argv.length; j++) {
//      total += parseInt(process.argv[j]);

// }

for (let j = 2; j < process.argv.length; j++) {
  const value = parseInt(process.argv[j]);
  if (!isNaN(value)) {
    total += value;
    console.log("-------", value);
  }
}

console.log(total);
console.log(total / (process.argv.length - 2));
