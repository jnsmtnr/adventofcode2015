const input = 36000000

const elves = {}

let house = 1

while (true) {
    let presents = 0

    for (let i = 1; i <= house; i++) {
        if (house % i === 0) {
            if (!elves[i]) {
                elves[i] = 1
                presents += i * 11
            }
            else if (elves[i] && elves[i] < 50) {
                elves[i]++
                presents += i * 11
            }
        }
    }

    if (presents > input) {
        console.log(house)
        break
    }

    house += 1
}
