function calculator(a, b, op){
    switch(op){
        case '+':
            return a+ b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            if(b === 0){
                return console.error('b must be not 0');
            }else{
                return a / b
            }
    }   
}

console.log(calculator(10,0,'*'));
