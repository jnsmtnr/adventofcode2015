const input = require('fs').readFileSync('input.txt', 'utf8')

const replacements = []
let original
let molecule

for (const line of input.split('\n')) {
    if (!line) continue

    if (line.includes('=>')) {
        replacements.push({
            from: line.split(' => ')[0],
            to: line.split(' => ')[1],
        })
    }
    else {
        original = line
    }
}

replacements.sort(() => 0.5 - Math.random())

molecule = original
let step = 0

while (molecule !== 'e') {
    step++
    for (const rep of replacements) {
        const { from, to } = rep

        const index = molecule.indexOf(to)

        if (index !== -1) {
            molecule = molecule.slice(0, index) + from + molecule.slice(index + to.length)
            break
        }
    }

    if (step === 1000) {
        molecule = original
        step = 0
        replacements.sort(() => 0.5 - Math.random())
    }
}

console.log(step)
