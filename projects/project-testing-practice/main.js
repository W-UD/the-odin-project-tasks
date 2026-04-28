function capitalize(str_p) {
  return str_p.at(0);
}

function reverseString(str_r) {
  return str_r.split().reverse().join();
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }

    return a / b;
  },

  multiply(a, b) {
    return a * b;
  }
}

// CaesarCipher
const alphabeth = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];

function isCapitalized(str) {
  return str === str.toUpperCase();
}

function toShift(letter, obj, keyShift) {
  //Check Letter upperCase or not
  if (isCapitalized(letter)) {
    const lowerLetter = letter.toLowerCase();
    console.log(lowerLetter);

    if (obj.includes(lowerLetter)) {
      const newShift = obj.indexOf(lowerLetter) + keyShift;
      return alphabeth[newShift].toUpperCase();
    }

  }
  
  // processed if the letter not upperCased
  if (obj.includes(letter)) {
    const newShift = obj.indexOf(letter) + keyShift;
    return alphabeth[newShift];
  }

  return letter;
}

function keyHandler(key, objLength) {
  const newKey = objLength - key;
  return Math.abs(newKey);
}

function caesarCipher(msg, key) {
  let newKey = key;
  if (key >= alphabeth.length) {
    newKey = keyHandler(key, alphabeth.length);
  }
  const msgArr = msg.split('');
  const resultArr = [];
  console.log(msgArr);

  msgArr.forEach((item) => {
    const newLetter = toShift(item, alphabeth, newKey);
    resultArr.push(newLetter);
  });

  console.log(resultArr.join(''));
  return resultArr.join('');
}
caesarCipher('abc', 3);
caesarCipher('abc', 26);

// AnalyzeArray Test
function analyzeArray(arr) {
  const average = arr.reduce((avr, curNum) => avr + curNum, 0) / arr.length;
  const max = arr.reduce((max, curNum) => curNum > max ? curNum : max, arr[0]);
  const min = arr.reduce((min, curNum) => curNum < min ? curNum : min, arr[0]);
  return {
    average,
    max,
    min,
    length: arr.length
  };
}
const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};


export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
