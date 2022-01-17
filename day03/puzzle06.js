const input = require('fs').readFileSync('input.txt', 'utf8');

let x1 = 0
let y1 = 0

let x2 = 0
let y2 = 0

const route = {
    '0,0': 2,
}

for (let i = 0; i < input.length; i += 2) {
    const char1 = input[i]
    const char2 = input[i+1]

    if (char1 === '^') y1 += 1
    else if (char1 === '>') x1 += 1
    else if (char1 === 'v') y1 -= 1
    else if (char1 === '<') x1 -= 1
    
    if (route[ x1 + ',' + y1 ]) route[ x1 + ',' + y1 ]++
    else route[ x1 + ',' + y1 ] = 1

    if (char2 === '^') y2 += 1
    else if (char2 === '>') x2 += 1
    else if (char2 === 'v') y2 -= 1
    else if (char2 === '<') x2 -= 1
    
    if (route[ x2 + ',' + y2 ]) route[ x2 + ',' + y2 ]++
    else route[ x2 + ',' + y2 ] = 1
}

console.log(Object.keys(route).length)
