/****
 *
 *
 * the perfect number is a number that the sum of his divisors equals to the input number
 */

function isPerfectNumber(num) {
  let divisors = [];
  let sum = 0;

  for (let i = 1; i  <= num / 2; i++) {
    if (num % i  == 0) divisors.push(i);
  }
  for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }
  if (sum === num) {
    return true;
  }else{
    return false;
  } 
// return divisors
  
}

console.log(isPerfectNumber(28));
