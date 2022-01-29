const input = require('fs').readFileSync('input.txt', 'utf8')

const digits = '-0123456789'

let current = ''

const numbers = []

for (const char of input) {
    if (digits.includes(char)) {
        current += char
    }
    else if (current) {
        numbers.push(parseInt(current))
        current = ''
    }
}

console.log(numbers.reduce((acc, cur) => acc + cur, 0))
