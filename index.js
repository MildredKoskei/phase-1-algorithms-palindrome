function isPalindrome(word) {
  // Write your algorithm here
  //we'll work with words/strings and return a statement in case they match
  //if string === reversed string ,return true else return false
  const wordValues = word.split('');
  const reverseWordValues = wordValues.reverse();
  const reversedWord = reverseWordValues.join('');
  if(word === reversedWord){
    return true
  }
  else {
    return false
  }

}
isPalindrome('abba');
isPalindrome('racecar');
isPalindrome('a');
isPalindrome('robot');
isPalindrome('ab');

/* 
  Add your pseudocode here
  We take the word we've input and split it,then reverse it and join the word.
  compare reversed word and input word. Return a statement.
  
*/

/*
  Add written explanation of your solution here
  This function isPalindrome checks if a certain word is a palidrome
  We first split the word,the reverse it.
  After reversing it, we join it back
  We then compare the word and the reversed word and return true if they match
  and false if it is not a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting:  true");
  console.log("=>",  isPalindrome("madam"));
}

module.exports = isPalindrome;
