const input = require('fs').readFileSync('input.txt', 'utf8')

let nice = 0

for (const line of input.split('\n')) {
    if (/(ab)|(cd)|(pq)|(xy)/g.test(line)) continue

    if (!(line.match(/[aeiou]/gi)?.length >= 3)) continue

    if (!line.match(/(.)\1/g)) continue

    nice++
}

console.log(nice)