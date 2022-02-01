const input = require('fs').readFileSync('input.txt', 'utf8')

const containers = input.split('\n').filter(Boolean).map(Number)

let combinations = 0

for (let i = 0; i < 2**containers.length; i++) {
    const binary = i.toString(2)

    const template = new Array(containers.length - binary.length).fill(0).join('') + binary

    let total = 0

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '1') {
            total += containers[i]
        }
    }

    if (total === 150) combinations++
}

console.log(combinations)
