


function theShortest(str){

    let words = str.split(" ");


    let longestWord = words[0];
    let shortetWord = words[0];
    for(let word of words){ // off get the word , but in get the index
        if(word.length > longestWord.length){
            longestWord = word
        } 
        if(word.length < shortetWord.length){
            shortetWord = word
        }
    }
    return {longestWord,shortetWord}
}



let the_longets_the_shortest = theShortest("mot le plus long dans une phrase")
console.log(the_longets_the_shortest)