// let strings = "Welcome to Holberton School, what is your name?\n";

// function printout() {
//   process.stdout.write(strings);
// }
// printout()
// // process.stdout.write("Welcome to Holberton School, what is your name?\n");
// process.stdin.setEncoding('utf-8');
// process.stdin.on('data', (data) => {
//   const message = data.toString().trim();
//   console.log(`Your name is: ${message}!`);
//   console.log("This important software is now closing");
//   process.exit();
// //   process.stdout.write(arg.toString() + '\n');
// });
// process.stdout.write("Welcome to Holberton School, what is your name?\n");
// process.stdin.on('data', (data) => {
//   console.log(`Your name is: ${data.toString()}!`)
// });
// console.log("This important software is now closing");
// process.exit();

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write('Your name is: ' + data);
    // process.exit("This important software is now closing");
  }
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
