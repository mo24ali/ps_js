function Palindrome(str){
   let i = 0 
   let j = str.length - 1
   while(i < j){
        if(str[i] !== str[j]){
            return false;
            break;
        }
            
        i++; 
        j--;
        
   }
   return true
}

console.log(Palindrome("ollllo"));
