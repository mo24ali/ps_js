function selectionSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let min = i;
        for(let j= i+1 ; j < arr.length ; j++){ // J must always go from i + 1 
            if(arr[j] < arr[min]){
                min = j
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
}


let arr = [5,4,68,9,1,3,4,6,1,5]
selectionSort(arr)
console.log(arr);
