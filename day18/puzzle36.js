const input = require('fs').readFileSync('input.txt', 'utf8')

let lights = input.split('\n').filter(Boolean).map(line => line.split(''))

lights[0][0] = '#'
lights[0][99] = '#'
lights[99][0] = '#'
lights[99][99] = '#'

for (let step = 0; step < 100; step++) {
    const newLights = []

    for (let row = 0; row < lights.length; row++) {
        const newRow = []

        for (let col = 0; col < lights[row].length; col++) {
            if ((row === 0 && col === 0) || (row === 0 && col === 99) || (row === 99 && col === 0) || (row === 99 && col === 99)) {
                newRow.push('#')
            }
            else {
                let on = 0

                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
    
                        if (lights[row + i] && lights[row + i][col + j] === '#' && !( i === 0 && j === 0 )) on++
    
                    }
                }
    
                if (lights[row][col] === '#' && (on === 2 || on === 3)) {
                    newRow.push('#')
                }
                else if (lights[row][col] === '.' && on === 3) {
                    newRow.push('#')
                }
                else {
                    newRow.push('.')
                }
            }

        }

        newLights.push(newRow)
    }

    lights = [...newLights]
}

let on = 0

for (let row = 0; row < lights.length; row++) {
    for (let col = 0; col < lights[row].length; col++) {

        if (lights[row][col] === '#') on++ 

    }
}

console.log(on)
