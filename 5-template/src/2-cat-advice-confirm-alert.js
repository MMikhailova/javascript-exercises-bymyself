'use strict';

// read the user's boolean input

const likesCats = confirm('i like cats');
const isAllergic = confirm('i am allergic to cats');
const ownsOne = confirm('i own a cat');

// generate good advice

let advice = '';

if (likesCats && isAllergic && ownsOne) {
  advice = 'replace your cat with a stuffed animal';
} else if (likesCats && isAllergic && !ownsOne) {
  advice = 'make a friend who has a cat';
} else if (likesCats && !isAllergic && ownsOne) {
  advice = 'you are doing great';
} else if (likesCats && !isAllergic && !ownsOne) {
  advice = 'get a cat';
} else if (!likesCats && isAllergic && ownsOne) {
  advice = 'rethink your life choices';
} else if (!likesCats && isAllergic && !ownsOne) {
  advice = 'you are doing great';
} else if (!likesCats && !isAllergic && ownsOne) {
  advice = 'you could be doing worse';
} else if (!likesCats && !isAllergic && !ownsOne) {
  advice = 'you are doing great';
}

// share your advice with the user

alert(advice);
