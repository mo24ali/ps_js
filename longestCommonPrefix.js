// function longestCommonPrefix(arr){

//     let prefix = ""
    

//     prefix += arr[0][0]
//     for(let  i = 0 ; i < arr.length ; i++){
//         if(perfix !== arr[i][0]){
//             prefix = ""
//         }
//     }
//     return prefix
// }




let arr = ["flower", "flow", "flight"]
let arr1 = ["dog", "racecar", "car"]
// console.log(longestCommonPrefix(arr));



function longestCommonPrefix(str){
    let prefix = str[0]
    for(let i = 1 ; i < str.length ; i++){
        while(str[i].indexOf(prefix) !== 0){ // check if the prefix it is a prefix at the 0 position of the string
            prefix = prefix.substring(0, prefix.length - 1) // el
        }
    }
    return prefix
};


function longestCommonPrefix2(str){
    let firstChar = str[0].split("")
}
console.log(longestCommonPrefix(arr));
