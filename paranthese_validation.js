
/****
 * 
 * 
 * the idea is the map each possible opening parenthese with it closing opposite , 
 * if the it exists push it 
 * if not pop the first one 
 * 
 * 
 * if we got empty stack than the parenthese are valid else not valid 
 */


function parentheseValidation(str){
    const stack = [];
    const map = {
        "(":")",
        "{":"}",
        "[":"]"
    };

    for(let char of str){
        if(map[char]){
            stack.push(char)
        } else {
            let last = stack.pop()
            if(map[last] !== char) return false
        }
    }
    return stack.length === 0;
}



console.log(parentheseValidation("[())]"))