/*var myButton = document.querySelector('button');
myButton.onclick = function checkJavascript() {
  document.getElementById("intro").style.display = "none";
}*/

  // anotherFunction() only executed if no text given
  // its result becomes the value of text
'use strict'
const checkName = () => {
  debugger;
  const name = document.querySelector("#input").value;
  return name === ''? alert('entre your name'):changeForm(name)
  }


const changeForm=(name)=> {

  let form = document.getElementById("form");
  document.querySelector("h1").innerText = 'Hi, '+name;
  document.getElementById("intro").style.display = "none";
  document.getElementById("form").style.display = "block";
}
let i=0
let changeContent = () => {
  const questionList = [
    "Finish this sequence: 'un', 'deux', 'trois'...",
    "Volvo",
    "BMW",
  ];
  const answers = ['un', 'deux', 'trois','cinq','six','huit'
  ];
  if (i == 0) {
    var header = document.querySelector("h1");
    header.remove();
    document.getElementById("question").innerText = questionList[i];
    document.getElementById("option1").innerText = answers[i];
    document.getElementById("option2").innerText = answers[i++];
    document.getElementById("option3").innerText = answers[i+2];
    i++;
    
  } else {
    document.getElementById("question").innerText = questionList[i];
    i++;
  }  
  }


