const length = 10;
const star = "";

function printLeterNTime (char, n) {
    let res = "";
    for(let i = 0; i < n; i++){
        res += char
    }
    console.log(res);
}

function printWithPaddingStart (char, length) {
    let res = "";
    for(let i = 0; i < length - 1; i++){
        res += " ";
    }
    res += char;
    console.log(res)
}

printLeterNTime(star, length)

for(let i = length - 1; i > 1; i--){
    printWithPaddingStart("", i)
}

printLeterNTime(star, length)