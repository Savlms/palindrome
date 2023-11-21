function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  
  const word = "!A man, a plan, a canal, Panama!";
  console.log(isPalindrome(word)); 
  
  const word2 = "My baby, Amara!";
  console.log(isPalindrome(word2)); 