const input = require('fs').readFileSync('input.txt', 'utf8')

const distances = []

for (const line of input.split('\n')) {    
    if (!line) continue
    
    const [, , , speed, , , time, , , , , , , rest] = line.split(' ')
    
    let race = 2503
    let flying = true
    let distance = 0

    while (race > 0) {
        if (flying && +time > race) {
            distance += +speed * race
            race = 0
        }
        else if (flying) {
            distance += +speed * +time
            race -= +time
        }
        else {
            race -= +rest
        }
        flying = !flying
    }

    distances.push(distance)
}

console.log(Math.max(...distances))
