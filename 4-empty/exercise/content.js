let i = 0;
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
};
