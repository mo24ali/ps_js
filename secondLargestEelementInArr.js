function sort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length -i - 1 ; j++){
            if(arr[j] < arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}


function secondLargestElement(arr){
    let count = new Set()
    sort(arr)
    for(let i = 0 ; i < arr.length ; i ++){
        count.add(arr[i])
    }
    let newArr = Array.from(count)
    return newArr[1]
}


let arr = [1,8,3,6,4,8,9,2,3]


console.log(secondLargestElement(arr));

