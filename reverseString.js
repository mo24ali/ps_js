function reverseString(str){
    let reversed = "" //strings are always defined by an empty string
    let j = 0
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reversed += str[i]
    }

    return reversed
    
}



console.log(reverseString("hello "))