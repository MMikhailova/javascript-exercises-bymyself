const changeForm = () => {
  const intro = document.querySelectorAll(".intro");
  const form= document.querySelectorAll(".form");
  intro.forEach((element) => element.style.display = "none");
  form.forEach((element) => (element.style.display = "grid"));
  
}
document.getElementById("start").addEventListener("click", changeForm);
