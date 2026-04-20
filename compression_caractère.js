/***
 * 
 * 
 * the simplest idea is the think of the consecutive chars approach
 * init the compressdStr as empty string , 
 * if the current char match the next one increase the counter 
 * and concatenate the char tracked with the counter
 */

function compressChar(str) {
  let count = 1;
  let compressdStr = ""
  for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]){
        count ++ ;
        
    }else{
        compressdStr += str[i] + count
        count = 1 ;
    }

  }
  return compressdStr;

}


console.log(compressChar('aaabbccccc'))
