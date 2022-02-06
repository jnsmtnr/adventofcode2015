const input = 36000000

let house = 1

while (true) {
    let presents = 0

    for (let i = 1; i <= house; i++) {
        if (house % i === 0) {
            presents += i * 10
        }
    }

    if (presents > input) {
        console.log(house)
        break
    }

    house += 1
}