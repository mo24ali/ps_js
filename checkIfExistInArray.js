// function checkExistence(arr , elem){
    

//     let i = 0
//     while( i < arr.length){
//         if(arr[i] == elem){
//             return true;
//             break;
//         }
//         return false;
//         i++;
//     }
// }



function checkExistence(arr, elem){
    let isExist = null

    for(let num of arr){
        if(num == elem){
            isExist = true
            break
        }else{
            isExist = false
        }
    }

    return isExist

}

function checkPostion(arr, elem){
    let pos = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == elem){
            pos = i;
            break
        }
    }
    return pos+1;
}

let arr = [1,2,3,4,8,2,4,9,3,7,5]
console.log(checkExistence(arr,9))



console.log(checkPostion(arr,5))