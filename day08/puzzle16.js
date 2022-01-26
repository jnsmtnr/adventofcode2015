const input = require('fs').readFileSync('input.txt', 'utf8')

let codeLength = 0
let stringLength = 0

for (const line of input.split('\n')) {
    if (line.length === 0) continue

    codeLength += line.length

    for (const char of line) {
        if (char === '"' || char === '\\') {
            stringLength++
        }

        stringLength++
    }

    stringLength += 2
}

console.log(stringLength - codeLength)
