const input = 'ckczppom'

const { createHash } = require('node:crypto')

let i = 1

while (true) {
    const hash = createHash('md5')

    hash.update(input + i)
    
    if (hash.digest('hex').slice(0, 5) === '00000') {
        console.log(i)
        break
    }

    i++
}
