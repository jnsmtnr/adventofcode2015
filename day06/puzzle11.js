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
                lights[`${x},${y}`] = true
            }
            else if (cmd[0] === 'off') {
                lights[`${x},${y}`] = false
            }
            else {
                lights[`${x},${y}`] = !lights[`${x},${y}`]
            }
        }
    }
}

let on = 0

for (const light of Object.values(lights)) {
    if (light) on++
}

console.log(on)
