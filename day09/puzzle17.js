const input = require('fs').readFileSync('input.txt', 'utf8')

const cities = []
const distances = {}

for (const line of input.split('\n').filter(Boolean)) {
    const [a, , b, , distance] = line.split(' ')

    if (!cities.includes(a)) {
        cities.push(a)
    }
    if (!cities.includes(b)) {
        cities.push(b)
    }

    distances[`${a}-${b}`] = +distance
}

let routes = cities.map(city => [city])

while (routes[0].length < 8) {
    const newRoutes = []

    for (const route of routes) {
        for (const city of cities) {
            const newRoute = [...route]
            if (!newRoute.includes(city)) {
                newRoute.push(city)
                newRoutes.push(newRoute)
            }
        }
    }

    routes = [...newRoutes]
}

let shortest = Infinity

for (const route of routes) {
    let length = 0

    for (let i = 0; i < route.length - 1; i++) {
        const distance = distances[`${route[i]}-${route[i + 1]}`] || distances[`${route[i + 1]}-${route[i]}`]

        length += distance
    }

    if (length < shortest) {
        shortest = length
    }
}

console.log(shortest)
