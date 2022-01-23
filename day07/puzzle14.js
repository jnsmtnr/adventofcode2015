const { a } = require('./puzzle13')

const input = require('fs').readFileSync('input.txt', 'utf8')

const wires = {}

while (wires['a'] === undefined) {
    for (let line of input.split('\n')) {
        line = line.split(' ')

        if (line.length === 5) {
            const a = isNaN(parseInt(line[0])) ? wires[line[0]] : parseInt(line[0])
            const b = isNaN(parseInt(line[2])) ? wires[line[2]] : parseInt(line[2])

            if (a !== undefined && b !== undefined) {
                if (line[1] === 'AND') {
                    wires[line[4]] = a & b
                }
                if (line[1] === 'OR') {
                    wires[line[4]] = a | b
                }
                if (line[1] === 'LSHIFT') {
                    wires[line[4]] = a << b
                }
                if (line[1] === 'RSHIFT') {
                    wires[line[4]] = a >> b
                }
            }
        }

        if (line.length === 4) {
            if (wires[line[1]] !== undefined) {
                wires[line[3]] = ~wires[line[1]]
            }
        }

        if (line.length === 3) {
            if (line[2] === 'b') {
                wires['b'] = a
            }
            else if (!isNaN(parseInt(line[0]))) {
                wires[line[2]] = parseInt(line[0])
            }
            else if (wires[line[0]] !== undefined) {
                wires[line[2]] = wires[line[0]]
            }
        }
    }
}

console.log(wires['a'])
