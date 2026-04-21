function largestElementArray(arr){
    let max = 0
    for(let i = 0 ; i < arr.length ; i ++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max
}


let arr = [15, 27, 10, 35, 20, 45]
let arr2 = [3, 7, 2, 9, 4]
console.log(largestElementArray(arr2));



function split(str, seprator){
    let arr = []
    let word = ""
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] != seprator){
            word += str[i]
        }
        else{
            arr.push(word)
            word = ""
        }
            
    }
    arr.push(word)
    return arr
}