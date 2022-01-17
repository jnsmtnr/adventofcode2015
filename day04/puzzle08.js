const input = 'ckczppom'

const { createHash } = require('node:crypto')

let i = 1

while (true) {
    const hash = createHash('md5')

    hash.update(input + i)
    
    if (hash.digest('hex').slice(0, 6) === '000000') {
        console.log(i)
        break
    }

    i++
}
