import map from './map.json';

function mapCheck (letter) {
  let value;
  let container;

  for (let [, str] of Object.entries(map)) {
    value = str.indexOf(letter);
    if (value >= 0) {
      container = str;
      break;
    }; 
  }

  return {
    value: value || 0,
    str: container
  }
}

function getRewrittenLetter(keyLetter, textLetter, target) {
  const keyValue = mapCheck(keyLetter).value;
  const {value, str} = mapCheck(textLetter);
  
  if (!str) {
    return textLetter;
  }
  
  let newValue = value + (target * (keyValue + 1));
  if (newValue < 0) {
    do {
      newValue += str.length;
    } while (newValue < 0);
  }
  const rewrittenValue = newValue < str.length ? newValue : newValue % str.length;
  
  return str[rewrittenValue];
};

function getRewrittenLetters (key, text, target) {
  if (text && text.length && key && key.length) {
    let encrypted = '';
  
    for (let i = 0; i <= text.length - 1; i++) {
      const keyLetter = i < key.length ? key[i] : key[i % key.length];
      const textLetter = text[i];
      const rewrittenLetter = getRewrittenLetter(keyLetter, textLetter, target);
  
      encrypted += rewrittenLetter;
    }
  
    return encrypted;
  }

  return text;
};

function encrypt (key) {
  return function (text) {
    return getRewrittenLetters(key, text, 1)
  };
};

function decrypt (key) {
  return function (string) {
    return getRewrittenLetters(key, string, -1)
  }
};

export default {
  encrypt,
  decrypt
};