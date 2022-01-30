const input = require('fs').readFileSync('input.txt', 'utf8')

const { pairs, people } = input.split('\n').reduce((acc, line) => {
    if (!line) return acc

    const [p1, , dir, score, , , , , , , p2] = line.replace('.', '').split(' ')

    if (!acc.people.includes(p1)) acc.people.push(p1)

    acc.pairs[`${p1}-${p2}`] = score * (dir === 'gain' ? 1 : -1)

    return acc
}, { pairs: {}, people: [] })

let orders = people.map(person => [person])

while (orders[0].length < people.length) {

    const newOrders = []

    for (const order of orders) {

        for (const person of people) {
            if (order.includes(person)) continue

            const newOrder = [...order]
            newOrder.push(person)

            newOrders.push(newOrder)
        }

    }

    orders = newOrders
}

let maxHappines = 0

for (const order of orders) {
    let happines = 0

    for (let i = 0; i < order.length; i++) {
        if (i === order.length - 1) {
            happines += pairs[`${order[i]}-${order[0]}`]
            happines += pairs[`${order[0]}-${order[i]}`]
        }
        else {
            happines += pairs[`${order[i]}-${order[i + 1]}`]
            happines += pairs[`${order[i + 1]}-${order[i]}`]
        }
    }

    if (happines > maxHappines) maxHappines = happines
}

console.log(maxHappines)
