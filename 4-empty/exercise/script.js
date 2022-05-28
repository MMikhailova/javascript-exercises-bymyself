/*var myButton = document.querySelector('button');
myButton.onclick = function checkJavascript() {
  document.getElementById("intro").style.display = "none";
}*/

  // anotherFunction() only executed if no text given
  // its result becomes the value of text
'use strict'
function checkName() {
  const name = document.querySelector("#input").value;
  debugger;
return name === ''? alert('entre your name'):changeForm(name)
  }
  

function changeForm(name) {

  let form = document.getElementById("questions");
  document.querySelector("h1").innerText = 'Hi, '+name;
  document.getElementById("intro").style.display = "none";
  document.getElementById("questions").style.display = "block";
}