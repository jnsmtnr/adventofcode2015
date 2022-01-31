const result = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
}

const input = require('fs').readFileSync('input.txt', 'utf8')

const aunts = []

for (const line of input.split('\n')) {
    if (!line) continue

    const [, number, name1, q1, name2, q2, name3, q3] = line.replaceAll(':', '').replaceAll(',', '').split(' ')

    aunts.push({
        number: +number,
        [name1]: +q1,
        [name2]: +q2,
        [name3]: +q3
    })
}

const number = aunts
    .find(aunt => {
        for (const key in result) {
            if (aunt[key] !== undefined && aunt[key] !== result[key]) return false
        }

        return true
    })
    .number

console.log(number)

module.exports = { number }
