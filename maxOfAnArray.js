function maxOfAnArray(arr){
    let max = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max
}



let arr = [1,8,4,3,6,7,5]
console.log(maxOfAnArray(arr));
