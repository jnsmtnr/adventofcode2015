const input = require('fs').readFileSync('input.txt', 'utf8')

let nice = 0

for (const line of input.split('\n')) {
    if (!line.match(/(..).*\1/g)) continue

    if (!line.match(/(.).{1}\1/g)) continue

    nice++
}

console.log(nice)
