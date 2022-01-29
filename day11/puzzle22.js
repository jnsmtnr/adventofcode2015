const abc = 'abcdefghijklmnopqrstuvwxyz'

const password = require('./puzzle21').password.split('')

while (true) {
    for (let i = password.length - 1; i >= 0; i--) {
        if (password[i] !== 'z') {
            password[i] = abc[abc.indexOf(password[i]) + 1]
            break
        }
        else {
            password[i] = 'a'
        }
    }

    let first = false

    for (let i = 0; i < 6; i++) {
        if (
            abc.indexOf(password[i]) + 1 === abc.indexOf(password[i + 1]) &&
            abc.indexOf(password[i + 1]) + 1 === abc.indexOf(password[i + 2])
        ) {
            first = true
            break
        }
    }

    let second = false
    let pairs = 0

    for (let i = 0; i < 7; i++) {
        if (password[i] === password[i + 1]) {
            pairs++
            i++
        }
    }

    second = pairs >= 2

    let third = true

    for (let i = 0; i < 8; i++) {
        if (['i', 'o', 'l'].includes(password[i])) {
            third = false
            break
        }
    }

    if (first && second && third) {
        console.log(password.join(''))
        break
    }
}
