

/***
 * 
 * 
 * 
 * bubbleSort 
 */
function bubbleSort(arr){
    for(let i = 0 ; i < arr.length; i++){ // go through all the array 
        for(let j = 0 ; j < arr.length - 1 -i ; j++){ // it skips when the bigges element is in its place
            if(arr[j] > arr[j+1]){
                // swap(arr[i],arr[j])
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }   
    }
    return arr
}

/***
 * 
 * SelectionSort
 */











let arr = bubbleSort([8,2,4,9,3,7,5])


console.log(arr)