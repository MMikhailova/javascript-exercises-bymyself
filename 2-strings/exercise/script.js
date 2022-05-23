function checkJavascript() {
  const input = document.querySelector("#jsTest").value;
  console.log(input.includes("javascript"));
}
/* SOLUTION */

function vowels() {
  const input = document.querySelector("#vowelsInput").value;
  let vowels = "aeuoi";
  let i = 0;
  for (const letter of input) {
    if (vowels.includes(letter)) {
      i = i + 1;
    }
  }
  console.log(i);

  /* SOLUTION #1 */

  /* SOLUTION #2 */
}

function isPalindrome() {
  const input = document.querySelector("#palindrome").value;
  const paragraph = document.querySelector("#palindromeResult");

  let tupni = "";
  for (let letter of input) {
    tupni = letter + tupni;
  }
  if (input === tupni) {
    console.log("it is palindrome");
    paragraph.innerHTML = "true";
  } else {
    console.log("it is not palindrome");
    paragraph.innerHTML = "false";
  }
}
/* SOLUTION #1 */
// Bonus point if you do a .lowercase() first
