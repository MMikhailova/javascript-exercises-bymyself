
import { questionList } from "./content.js";
import { answers } from "./content.js";
import { input } from "./input.js";
import { compare } from "./counter.js";
import { counter } from "./counter.js";
const changeForm = () => {
  debugger;
  const intro = document.querySelectorAll(".intro");
  const form= document.querySelectorAll(".form");
  intro.forEach((element) => element.style.display = "none");
  form.forEach((element) => (element.style.display = "grid"));
  
}
document.getElementById("start").addEventListener("click", changeForm);

const changeContent = () => {
  var userChoices = input();
  const i = counter();
  if (i !== questionList.length) {
    document.getElementById("question").innerText = questionList[i];
    document.getElementById("option1").innerText = answers[i * 3];
    document.getElementById("option2").innerText = answers[i * 3 + 1];
    document.getElementById("option3").innerText = answers[i * 3 + 2];
  } else {
    document.getElementById("question").innerText =
      "Your score" + compare(userChoices);
    const options = document.querySelectorAll(".options");
    options.forEach((element) => element.style.display = "none");
  }
};
document.getElementById("submit").addEventListener("click", changeContent);