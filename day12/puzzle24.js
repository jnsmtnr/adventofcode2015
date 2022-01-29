let input = require('fs').readFileSync('input.txt', 'utf8')

while (input.includes(':"red"')) {
    let redIndex = input.indexOf(':"red"')

    let startIndex
    let end = 0

    for (let i = redIndex; i > 0; i--) {
        if (input[i] === '}') {
            end++
        }
        else if (input[i] === '{' && end) {
            end--
        }
        else if (input[i] === '{') {
            startIndex = i
            break
        }
    }

    let endIndex
    let start = 0

    for (let i = redIndex; i < input.length; i++) {
        if (input[i] === '{') {
            start++
        }
        else if (input[i] === '}' && start) {
            start--
        }
        else if (input[i] === '}') {
            endIndex = i
            break
        }
    }

    input = input.slice(0, startIndex) + input.slice(endIndex + 1)
}

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
