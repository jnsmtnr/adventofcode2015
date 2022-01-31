const input = require('fs').readFileSync('input.txt', 'utf8')

const ingredients = {}

for (const line of input.split('\n')) {
    if (!line) continue

    const [name, , capacity, , durability, , flavor, , texture, , calories] = line.replace(':', '').replaceAll(',', '').split(' ')

    ingredients[name.toLowerCase()] = {
        capacity: +capacity,
        durability: +durability,
        flavor: +flavor,
        texture: +texture,
        calories: +calories
    }
}

let max = 0

for (let a = 97; a > 0; a--) {
    for (let b = 1; b <= 100 - a - 2; b++) {
        for (let c = 1; c <= 100 - a - b - 1; c++) {
            for (let d = 1; d <= 100 - a - b - c; d++) {
                if (a + b + c + d === 100) {
                    const { sugar, sprinkles, candy, chocolate } = ingredients

                    const capacity = sugar.capacity * a + sprinkles.capacity * b + candy.capacity * c + chocolate.capacity * d
                    const durability = sugar.durability * a + sprinkles.durability * b + candy.durability * c + chocolate.durability * d
                    const flavor = sugar.flavor * a + sprinkles.flavor * b + candy.flavor * c + chocolate.flavor * d
                    const texture = sugar.texture * a + sprinkles.texture * b + candy.texture * c + chocolate.texture * d
                    const calories = sugar.calories * a + sprinkles.calories * b + candy.calories * c + chocolate.calories * d
                    
                    if (calories !== 500 || capacity < 0 || durability < 0 || flavor < 0 || texture < 0) continue

                    const total = capacity * durability * flavor * texture

                    if (total > max) max = total
                }
            }
        }
    }
}

console.log(max)
