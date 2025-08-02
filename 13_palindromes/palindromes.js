const palindromes = function (str) {
    let cleanedStr = str.match(/[a-zA-Z0-9]+/g).join("").toLowerCase();
    for(let i=0;i< cleanedStr.length/2;i++){
        if(cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
