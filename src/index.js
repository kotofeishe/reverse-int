function reverseString (string) {
    let i = 0;
    let resultReverseString = '';
    while (i < string.length) {
        resultReverseString = resultReverseString + string[string.length-1-i];
        i = i + 1;
    }
    return (resultReverseString);

    
}
module.exports = function reverse (n) {
        n = n.toString();
        if(n < 0) {
        n = n.slice(1);
      }
      let result = reverseString(n);
      
      while (+result[0] === 0) {
        result = result.slice(1);
       
      }
      return(result);
}




