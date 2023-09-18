let strings = "Welcome to Holberton School, what is your name?\n";

function printout() {
  process.stdout.write(strings);
}
printout()
// process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const message = data.toString().trim();
  console.log(`Your name is: ${message}!`);
  console.log("This important software is now closing");
  process.exit();
//   process.stdout.write(arg.toString() + '\n');
});
