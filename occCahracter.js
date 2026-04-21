function calculateOccurenceOfCharacter(str){
    let count = new Map()


    for(let char of str){
        count.set(char, (count.get(char) || 0) +1 )
    }
    return count
}



console.log(calculateOccurenceOfCharacter("aezrafavarfg"));
