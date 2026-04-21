function findPairs(arr, X){
    let pairs = []
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i] + arr[j] == X){
                pairs.push([arr[i],arr[j]])
            }
        }
    }
    return pairs    
}



let arr = [1,2,3,4,5,6,7,8,9]
let pairs = findPairs(arr,10)

console.log(pairs)