const sentence = process.argv.slice(2).join(" ");
const newLineDelay = sentence.length * 50;

let time = 0;
for (const char of sentence) {
  delayPrint(char, time);
  time += 50;
}

const delayPrint = function(char, time) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
};

setTimeout(() => console.log("\n"), newLineDelay);



