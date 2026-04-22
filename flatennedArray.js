function flattenArray(arr){
    
    let arr1 = []
    for(let ar of arr){
        if(Array.isArray(ar)){
            arr1 = arr1.concat(flattenArray(ar))
        }else{
            arr1.push(ar)
        }

    }
    return arr1
}



let arr = [[1, 2, [3]], 4, [5, [6, 7]]]
console.log(flattenArray(arr));
