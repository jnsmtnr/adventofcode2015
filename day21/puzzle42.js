const input = require('fs').readFileSync('input.txt', 'utf8')

const ORIGINAL_BOSS = {}

for (const line of input.split('\n')) {
    if (!line) continue

    const [stat, value] = line.split(': ')

    ORIGINAL_BOSS[stat.toLowerCase()] = +value
}

const weapons = [
    {
        cost: 8,
        damage: 4,
    },
    {
        cost: 10,
        damage: 5,
    },
    {
        cost: 25,
        damage: 6,
    },
    {
        cost: 40,
        damage: 7,
    },
    {
        cost: 74,
        damage: 8,
    },
]

const armors = [
    {
        cost: 0,
        armor: 0
    },
    {
        cost: 13,
        armor: 1
    },
    {
        cost: 31,
        armor: 2
    },
    {
        cost: 53,
        armor: 3
    },
    {
        cost: 75,
        armor: 4
    },
    {
        cost: 102,
        armor: 5
    },
]

const rings = [
    {
        cost: 25,
        damage: 1,
        armor: 0
    },
    {
        cost: 50,
        damage: 2,
        armor: 0
    },
    {
        cost: 100,
        damage: 3,
        armor: 0
    },
    {
        cost: 20,
        damage: 0,
        armor: 1
    },
    {
        cost: 40,
        damage: 0,
        armor: 2
    },
    {
        cost: 80,
        damage: 0,
        armor: 3
    },

]

let totalCost = 0

for (const armor of armors) {
    for (const weapon of weapons) {
        for (let i = 0; i <= parseInt('111111', 2); i++) {
            const ringConfig = Array(6 - i.toString(2).length).fill('0').join('') + i.toString(2)

            let cost = weapon.cost + armor.cost

            const player = {
                'hit points': 100,
                damage: weapon.damage,
                armor: armor.armor
            }

            let equipedRings = 0

            for (const index in ringConfig) {
                if (ringConfig[index] === '1') {
                    player.damage += rings[index].damage
                    player.armor += rings[index].armor
                    cost += rings[index].cost
                }
            }

            if (equipedRings > 2) {
                continue
            }

            const boss = { ...ORIGINAL_BOSS }

            while (player['hit points'] > 0 && boss['hit points'] > 0) {
                const playerDamage = player.damage - boss.armor

                boss['hit points'] -= playerDamage > 0 ? playerDamage : 1

                if (boss['hit points'] < 1) {
                    break
                }

                const bossDamage = boss.damage - player.armor

                player['hit points'] -= bossDamage > 0 ? bossDamage : 1

                if (player['hit points'] < 1) {
                    if (cost > totalCost) {
                        totalCost = cost
                    }
                    break
                }
            }
        }
    }
}

console.log(totalCost)
