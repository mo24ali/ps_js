/****
 * 
 * 
 * 
 * done the easy way with predefined function 
 */


function calculateOccurence(str, occuredWord){
    let words = str.split(" ")


    let occ = 0
    for(let word of words){
        if(word == occuredWord){
            occ ++;
        }
    }
    return occ;


}

function occArray(arr, num){
    let occ = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == num){
            occ ++;
        }
    }

    return occ;
}


console.log(calculateOccurence("halo malo falo halo balo galo halo halo salo", "halo"))



let arr = [1,2,1,2,4,5,7,8,5,6,9,2,222,2,2]

console.log(occArray(arr,2))