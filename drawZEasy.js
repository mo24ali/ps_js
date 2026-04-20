const length = 10;
const star = "*";
/****$
 * 
 * 
 * by brahim
 */
function printLeterNTime (char, n) {
    let res = "";
    for(let i = 0; i < n; i++){
        res += char
    }
    console.log(res);
}


// first row
printLeterNTime(star, length) 


// the diagonal
for(let i = length - 1; i > 1; i--){
    console.log(star.padStart(i, " "))
}


// last row
printLeterNTime(star, length)