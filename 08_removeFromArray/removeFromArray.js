const removeFromArray = function() {
    const args=Array.from(arguments);
    len=arguments.length;
    let arr=arguments[0];
    for(i=1;i<len;i++){
        for(j=0;j<arr.length;j++){
            if(arguments[i]===arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
