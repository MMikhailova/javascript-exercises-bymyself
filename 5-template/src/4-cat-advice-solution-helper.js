// you can solve this challenge using only these IO functions
import { readBoolean, display } from '../lib/dom-io.js';

document.getElementById('give-advice').addEventListener('click', () => {
  // read the user's boolean input from the UI

  const likesCats = readBoolean('likes-cats');
  const isAllergic = readBoolean('is-allergic');
  const ownsOne = readBoolean('owns-one');

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

  display('message', advice);
});
