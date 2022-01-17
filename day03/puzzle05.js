const input = require('fs').readFileSync('input.txt', 'utf8');

let x = 0
let y = 0

const route = {
    '0,0': 1,
}

for (const char of input) {
    if (char === '^') y += 1
    else if (char === '>') x += 1
    else if (char === 'v') y -= 1
    else if (char === '<') x -= 1
    
    if (route[ x + ',' + y ]) route[ x + ',' + y ]++
    else route[ x + ',' + y ] = 1
}

console.log(Object.keys(route).length)
