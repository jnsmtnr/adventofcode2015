const input = require('fs').readFileSync('input.txt', 'utf8')

let codeLength = 0
let stringLength = 0

for (const line of input.split('\n')) {
    if (line.length === 0) continue

    codeLength += line.length

    let i = 1

    while (i < line.length - 1) {
        stringLength++

        if (line[i] === '\\') {
            if (line[i+1] !== 'x') {
                i++
            }
            else {
                i += 3
            }
        }

        i++
    }
}

console.log(codeLength - stringLength)
