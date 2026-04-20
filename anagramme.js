function sort(arr){
    for(let i  = 0 ; i < arr.length ; i++){
        for(let j = 0; j < arr.length -1 - i ; j++){
            if(arr[j] > arr[j+1])
            [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}

function isAnagram(str1, str2){
    let isAna = true

    //edge cases
    if(str1.length != str2.length){
        isAna = false
    }
    
    let arr1 = sort(str1.split(''))
    let arr2 = sort(str2.split(''))
    let arr1_Str = arr1.join("")
    let arr2_Str = arr2.join("")

    return arr1 === arr2

}

function groupAnagram(words){
    let map = {} ;
    for(let word of words){
        let key = word.split("").sort().join("")
        if(!map[key]) map[key] = [];
        map[key].push(word)
    }

    return Object.values(map)
}


console.log(groupAnagram(["eat","tea","tan","ant","nat", "bat"]))




// the easiest way 
function isAnagramm(str1, str2){
    if(str1.length != str2.length)
        return false
    let arr1 = str1.split("").sort().join("")
    let arr2 = str2.split("").sort().join("")
    return arr1 === arr2

}



// console.log(isAnagram("hello", "lelohh"))