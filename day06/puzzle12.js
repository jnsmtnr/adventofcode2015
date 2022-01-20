const input = require('fs').readFileSync('input.txt', 'utf8')

const lights = {}

for (const line of input.split('\n')) {
    const cmd = line.split(' ').slice(-4)

    if (cmd.length < 4 ) continue

    const [x1, y1] = cmd[1].split(',')
    const [x2, y2] = cmd[3].split(',')

    for (let x = Math.min(x1,x2); x <= Math.max(x1,x2); x++) {
        for (let y = Math.min(y1,y2); y <= Math.max(y1,y2); y++) {
            if (cmd[0] === 'on') {
                if (lights[`${x},${y}`]) lights[`${x},${y}`]++
                else lights[`${x},${y}`] = 1
            }
            else if (cmd[0] === 'off') {
                if (lights[`${x},${y}`] > 0) lights[`${x},${y}`]--
                else lights[`${x},${y}`] = 0
            }
            else {
                if (lights[`${x},${y}`]) lights[`${x},${y}`] += 2
                else lights[`${x},${y}`] = 2
            }
        }
    }
}

let on = 0

for (const light of Object.values(lights)) {
    on += light
}

console.log(on)
