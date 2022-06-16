export var userChoices = [];

export const input = () => {
  const option1 = document.getElementById("one");
  const option2 = document.getElementById("two");
  const option3 = document.getElementById("three");
  if (option1.checked === true) {
    userChoices.push(1);
  } else if (option2.checked === true) {
    userChoices.push(2);
  } else {
    userChoices.push(3);
  }
  return userChoices;
};
