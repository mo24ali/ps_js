function mergeArr(arr1, arr2){
    let arr = []
    let i = 0  , j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        }else{
            arr.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        arr.push(arr1[i])
        i++;
    }

    while(j < arr2.length){
        arr.push(arr2[j])
        j++
    }
    return arr
}


let arr = [1,2,3,4,5,6]
let arr1 = [2,5,6,8,9,7]

console.log(mergeArr(arr, arr1));
