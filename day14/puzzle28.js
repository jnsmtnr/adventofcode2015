const input = require('fs').readFileSync('input.txt', 'utf8')

const deers = {}

for (const line of input.split('\n')) {    
    if (!line) continue
    
    const [name, , , speed, , , time, , , , , , , rest] = line.split(' ')

    deers[name] = { speed: +speed, time: +time, rest: +rest, distance: 0, flying: true, burst: 0, points: 0 }
}

let max = 0

for (let i = 1; i <= 2503; i++) {
    for (const deer of Object.values(deers)) {
        if (deer.flying) {
            deer.distance += deer.speed
        }
        deer.burst++

        if (deer.flying && deer.burst === deer.time) {
            deer.flying = false
            deer.burst = 0
        }

        if (!deer.flying && deer.burst === deer.rest) {
            deer.flying = true
            deer.burst = 0
        }

        if (deer.distance > max) {
            max = deer.distance
        }
    }

    for (const deer of Object.values(deers)) {
        if (deer.distance === max) {
            deer.points++
        }
    }
}

console.log(Object.values(deers).reduce((max, deer) => (deer.points > max) ? deer.points : max, 0))
