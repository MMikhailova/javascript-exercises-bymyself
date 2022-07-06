const changeForm = () => {
  //     let form = document.getElementById("form");
  //   document.getElementById("intro").style.display = "none";
  //  document.getElementById("form").style.display = "block";
  // };
  // document.getElementById("start").addEventListener("click", changeForm);
  

  const intro = document.querySelectorAll(".intro");
  const form= document.querySelectorAll(".form");
  intro.forEach((intr) => intr.style.display = "none");
  form.forEach((frm) => (frm.style.display = "block"));
  
}
document.getElementById("start").addEventListener("click", changeForm);

/**let i = 0;
let changeContent = () => {
  const questionList = [
    "Finish this sequence: 'un', 'deux', 'trois'...",
    "Volvo",
    "BMW",
  ];
  const answers = ["un", "deux", "trois", "cinq", "six", "huit"];
  if (i == 0) {
    var header = document.querySelector("h1");
    header.remove();
    document.getElementById("question").innerText = questionList[i];
    document.getElementById("option1").innerText = answers[i];
    document.getElementById("option2").innerText = answers[i++];
    document.getElementById("option3").innerText = answers[i + 2];
    i++;
  } else {
    document.getElementById("question").innerText = questionList[i];
    i++;
  }
};***/
