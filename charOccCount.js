function occCount(str){
    let counter = new Map()
    for(let char of str){
        counter.set(char, (counter.get(char) || 0) + 1 )
    }

    return counter
}


console.log(occCount("aaabcejpoad"))