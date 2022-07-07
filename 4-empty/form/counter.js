var countClick = -1;

export const counter = () => {
  countClick++;

  return countClick;
};

var score = 0;
export const compare = (arr=[]) => {
  const corrections = [1, 2, 1, 2, 3];
  for (let i = 0; i < arr.length; i++) {
    if (corrections[i] === arr[i]) {
      score++;
    }
  }
  return score;
};
