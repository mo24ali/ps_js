


/***
 * 
 * 
 * the main idea is to define a starting comparison point which is the pivot 
 * it can be the first number
 * after that we split the array into two parts left for elements less value then the pivot
 * the right side for element with higher value the the pivot
 * and we recall the process by recursion 
 *  
 */

function quickSort(arr){
    // the breaking point of the algorithm
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []


    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] <  pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [ ... quickSort(left), pivot , ... quickSort(right)]
}

let arr = [5,4,68,9,1,3,4,6,1,5]
console.log(quickSort(arr));
