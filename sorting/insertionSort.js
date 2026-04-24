/***
 * 
 * 
 * 
 * the idea is to find the thereshold of the array 
 * and keep comparing it backward, 
 * always one step ahead of the initial step i
 * insert the targeted value by the condition and put it in the chosen place of the array so that
 */


function insertionSort(arr){
    for(let i =  0 ; i < arr.length ; i++){
        let j = i+ 1; 
        while(j > 0 && arr[j] < arr[j-1]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--
        }
    }
}

let arr = [5,4,68,9,1,3,4,6,1,5]
insertionSort(arr)
console.log(arr);
