/*****
 * 
 * 
 * the main idea of the bubble sort is to take the choosen element by the condition 
 * and put it in the last case of the array so it cant be reached over and over again 
 * and the inner step is always < n - i - 1 for optimization to not always redo 
 * the sorted element again 
 */


function bubbleSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j< arr.length - i - 1 ; j ++){
            if(arr[j]< arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] // this method is called the destruction it minimize the use of any non necessary tempo variable

            }
        }
    }
}




let arr = [5,4,68,9,1,3,4,6,1,5]
bubbleSort(arr)
console.log(arr);