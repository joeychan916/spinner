const animationChars = ['|', '/', '-', '\\'];
let delay = 100;

for (let i = 0; i < 2; i++) {
  for (const char of animationChars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
}
