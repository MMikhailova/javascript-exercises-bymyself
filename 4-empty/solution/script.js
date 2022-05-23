function checkJavascript () {
  const input = document.querySelector('#jsTest').value;
  
  /* SOLUTION */
  if (input.includes('javascript')) {
    console.log('Yes, javascript is in the string');
  } else {
    console.log('No, javascript is not in the string');
  }
}

function vowels () {
  const input = document.querySelector('#vowelsInput').value;
  
  /* SOLUTION #1 */
  let total = 0;
  for (let char of input) {
    // This doesn't include capital letters but it could be included
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      total = total + 1;
    }
  }
  
  /* SOLUTION #2 */
  total = 0;
  for (let char of input) {
    if ('aeiouAEIOU'.includes(char)) {
      total = total + 1;
    }
  }
  console.log(total);
}

function isPalindrome () {
  const input = document.querySelector('#palindrome').value;
  
  /* SOLUTION #1 */
  // Bonus point if they do a .lowercase() first
  let reversed = '';
  for (let char of input) {
    reversed = char + reversed;
  }
  console.log(reversed === input);
}