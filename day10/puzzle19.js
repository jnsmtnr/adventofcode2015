let seq = '1113122113'

for (let i = 0; i < 40; i++) {
    let newSeq = ''
    
    let current = ''
    let number = 0
    
    for (const c of seq) {
        if (!current) {
            current = c
            number = 1
        }
        else if (current === c) number++
        else {
            newSeq += number.toString() + current
            current = c
            number = 1
        }
    }
    
    newSeq += number.toString() + current
    
    seq = newSeq
}

console.log(seq.length)
