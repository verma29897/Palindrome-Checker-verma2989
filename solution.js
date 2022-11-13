// complete the given function

function palindrome(str){
   const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'false';
        }
    }
    return 'true';

}
module.exports = palindrome
