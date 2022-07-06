import { counter } from "./counter.js";
import { compare } from "./counter.js";
import { input } from "./input.js";
import { userChoices } from "./input.js";
const questionList = [
  "Finish this sequence: 'un', 'deux', 'trois'...",
  "What is this a picture of?",
  "How would you greet someone in French?",
];
const answers = [
  "cinq",
  "quatre",
  "nuit",
  "poulet",
  "cochon",
  "vache",
  "au revoir",
  "bonjour",
  "je suis malade",
];

const changeContent = () => {
  const i = counter();
  if (i !== questionList.length) {
    input();
    document.getElementById("question").innerText = questionList[i];
    document.getElementById("option1").innerText = answers[i * 3];
    document.getElementById("option2").innerText = answers[i * 3 + 1];
    document.getElementById("option3").innerText = answers[i * 3 + 2];
  } else {
    document.getElementById("question").innerText =
      "Your score" + compare(userChoices);
  }
};
document.getElementById("submit").addEventListener("click", changeContent);
/**let changeContent = () => {
  const question = document.getElementById("question").innerText
  const questionList = [
    "Finish this sequence: 'un', 'deux', 'trois'...",
    "What is this a picture of?",
    "How would you greet someone in French?",
  ];
    const answers = ['cinq', 'quatre', 'nuit', 'poulet', 'cochon', 'vache','au revoir','bonjour','je suis malade'];
    const check = questionList.includes(question)
    if (check === false) {
        document.getElementById("question").innerText = questionList[0]
        document.getElementById("option1").innerText = answers[0];
        document.getElementById("option2").innerText = answers[1];
        document.getElementById("option3").innerText = answers[2]
    } else {
        let i = questionList.indexOf(question) + 1;
        document.getElementById("question").innerText = questionList[i]
            i = i * 3
            document.getElementById("option1").innerText = answers[i];
            document.getElementById("option2").innerText = answers[i + 1];
            document.getElementById("option3").innerText = answers[i + 2];
    }
    }**/
