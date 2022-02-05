const input = require('fs').readFileSync('input.txt', 'utf8')

const replacements = []
let start

for (const line of input.split('\n')) {
    if (!line) continue

    if (line.includes('=>')) {
        replacements.push({
            from: line.split(' => ')[0],
            to: line.split(' => ')[1],
        })
    }
    else {
        start = line
    }
}

const distinct = []

for (const rep of replacements) {

    const { from, to } = rep

    let index = 0

    while (index < start.length) {
        index = start.indexOf(from, index)

        if (index !== -1) {
            const newMolecule = start.slice(0, index) + to + start.slice(index + from.length)

            if (!distinct.includes(newMolecule)) {
                distinct.push(newMolecule)
            }

            index++
        }
        else {
            break
        }
    }
}

console.log(distinct.length)
