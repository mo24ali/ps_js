function split(str, separator){
    let arr = []
    let word = ""
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] !== separator){
            word += str[i]
        }else{
            arr.push(word)
            word = ""
        }
    }
    arr.push(word)
    return arr
}

function theLargestWord(str){
    let arr = split(str, ' ')
    let max = 0
    let maxWord = ""
    for(let ar of arr){
        if(max < ar.length){
            max = ar.length
            maxWord = ar
        }
    }
    return maxWord
}


let str = "aloha eyow so maaa fa "
console.log(theLargestWord(str));

