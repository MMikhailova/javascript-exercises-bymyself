// --- constants ---

const STRING_INPUTS = [
  'text',
  'email',
  'password',
  'search',
  'radio',
  'url',
  'tel',
  'date',
  'time',
  'month',
  'week',
  'datetime-local',
  'color',
  'hidden',
];

const BOOLEAN_INPUTS = ['checkbox'];

const NUMBER_INPUTS = ['number', 'range'];

const NO_ARGUMENT = Symbol('no arg');

const INVALID_ID = 'id is not a string (first argument)';

// --- helper functions ---

const wrongInputMessage = ({
  type = 'strings',
  id = '',
  allowed = [],
  name = 'input',
}) => `${name.toLowerCase()}${id ? `#${id}` : ''} is not for ${type}.
${
  allowed && allowed.length > 0
    ? `try using one of these types instead:\n- ${allowed.join('\n- ')}`
    : ''
}
`;

// ========= read functions =========

export const readString = (id) => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an input`
    );
  }
  if (!STRING_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: STRING_INPUTS,
        name: element.nodeName,
        id: element.id,
      })
    );
  }

  return element.value || '';
};

export const readBoolean = (id) => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an input`
    );
  }
  if (!BOOLEAN_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: BOOLEAN_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'booleans',
      })
    );
  }

  return element.checked;
};

export const readNumber = (id) => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an input`
    );
  }
  if (!NUMBER_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: NUMBER_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'numbers',
      })
    );
  }

  return Number(element.value || 0);
};

// ========= set functions =========

export const setString = (id, newValue = '') => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (typeof newValue !== 'string') {
    throw new TypeError('new value is not a string (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an input`
    );
  }
  if (!STRING_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: STRING_INPUTS,
        name: element.nodeName,
        id: element.id,
      })
    );
  }

  element.value = newValue;
};

export const setBoolean = (id, newValue = true) => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (typeof newValue !== 'boolean') {
    throw new TypeError('new value is not a boolean (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an input`
    );
  }
  if (!BOOLEAN_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: BOOLEAN_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'booleans',
      })
    );
  }

  element.checked = newValue;
};

export const setNumber = (id, newValue = 0) => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (typeof newValue !== 'number') {
    throw new TypeError('new value is not a number (second argument)');
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (element.nodeName !== 'INPUT') {
    throw new TypeError(
      `${element.nodeName.toLowerCase()}#${id} is not an input`
    );
  }
  if (!NUMBER_INPUTS.includes(element.type)) {
    throw new TypeError(
      wrongInputMessage({
        allowed: NUMBER_INPUTS,
        name: element.nodeName,
        id: element.id,
        type: 'numbers',
      })
    );
  }

  element.value = String(newValue);
};

// ========= display to DOM element =========

export const display = (id, newValue = NO_ARGUMENT) => {
  if (typeof id !== 'string') {
    throw new TypeError(INVALID_ID);
  }
  if (newValue === NO_ARGUMENT) {
    throw new TypeError(
      'you did not pass a value to display (second argument)'
    );
  }

  const element = document.getElementById(id);

  if (element === null) {
    throw new TypeError(`there is no element with id "${id}"`);
  }
  if (
    element.nodeName === 'INPUT' &&
    (STRING_INPUTS.includes(element.type) ||
      BOOLEAN_INPUTS.includes(element.type) ||
      NUMBER_INPUTS.includes(element.type))
  ) {
    throw new TypeError(
      `input#${id} is not for displaying data\n` +
        '- try using a "set" function to update it\'s value' +
        '- or changing it to a different input type or element'
    );
  }

  element.innerHTML = newValue;
};
