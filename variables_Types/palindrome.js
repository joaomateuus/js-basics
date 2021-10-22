//This functions is responsible for the first part 
function checkPalindrome(string, stringReverse) {
     
//Checking if the string is empty/null/undefinied, if its stops here
    if (!string) return 'String empty';
//This is the method that will transform the string in a palindrome 
    stringReverse = string.split('').reverse().join('');
    //Checking if its a palindrome, comparing the value of the string, if after changed you still able to read it´s palindrome 
        if ( stringReverse === string) {
            return 'this word is a palindrome';
        } else {
            return 'this word is not a palindrome'
        }
}

console.log(checkPalindrome("radar"));



