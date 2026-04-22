function removeDuplicatresFromArr(arr) {
  let result = []
  for(let i = 0 ; i< arr.length ; i++){
    let found = false
    // console.log('in check 1');
    
      for(let j = 0 ; j < result.length ; j++){
        // console.log('in check 2 ');
        
        if(arr[i] === result[j]){
          found = true
          break
        }
      }
      if(!found){
        result.push(arr[i])
      }
    }
  return result
}

let arr = [1, 2, 5, 2, 1, 4, 3, 5, 7, 9, 6, 3, 4, 5, 6];
console.log(removeDuplicatresFromArr(arr));
