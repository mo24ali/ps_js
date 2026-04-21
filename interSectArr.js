function arrayIntersect(arr1 , arr2){
    // let intersect = []
    let intersect = new Set() // to escape suplication
    
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j ++){
            if(arr1[i] === arr2[j]){
                intersect.add(arr1[i])
            }
        }
    }
    return intersect
}





let arr1 = [1,2,4,6,7,9,9,7]
let arr2 = [1,3,4,5,7,7,10]
console.log(arrayIntersect(arr1, arr2));

/****
 * 
 * 
 * with this for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j ++){


        O(n²)
 */