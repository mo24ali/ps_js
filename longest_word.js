let str = "alo ola alll mmmmm"
let word = ""
let maxLen = 0
let maxWord = ""
let j = 0

for(let i = 0 ; i < str.length ; i++){
    if(str[i] != " "){
        word[j++] = str[i]
        max = j
    }
}