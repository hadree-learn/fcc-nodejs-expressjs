const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const readFirst = readFileSync('./content/first.txt', 'utf8');
const readSecond = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${readFirst}, ${readSecond}`,
  { flag: 'a' }
);

console.log('task done!');
console.log('starting next task..');
