const input = require('fs').readFileSync('input.txt', 'utf8')

const containers = input.split('\n').filter(Boolean).map(Number)

let combinations = 0
let mininumNumberOfContainers = Infinity

for (let i = 0; i < 2**containers.length; i++) {
    const binary = i.toString(2)

    const template = new Array(containers.length - binary.length).fill(0).join('') + binary

    let total = 0
    let numberOfContainers = 0

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '1') {
            total += containers[i]
            numberOfContainers++
        }
    }

    if (total === 150) {
        if (numberOfContainers < mininumNumberOfContainers) {
            mininumNumberOfContainers = numberOfContainers
            combinations = 1
        }
        else if (numberOfContainers === mininumNumberOfContainers) {
            combinations++
        }
    }
}

console.log(combinations)
