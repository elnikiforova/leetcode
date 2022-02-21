const isPalindrome = (x) => {
  // return x.toString().split('').reverse().join('') === x.toString();

  if (x < 0 || x === 10) {
    return false;
  }

  let rest = x;
  let dec = 0;
  while (rest !== 0) {
    rest = Math.floor(rest / 10);
    dec++;
  }

  let result = true;
  let count = 1;
  while (dec - count > count) {

    console.log('dec', dec)
    console.log('x / (10 ** (dec - count))', x / (10 ** (dec - count)));
    console.log('x % (count * 10)', x % (count * 10));

    if (Math.round(x / (10 ** (dec - count))) !== x % (count * 10)) {
      result = false;
      break;
    }
    count++;
  }

  return result;
}

// console.log('121 >', isPalindrome(121));
console.log('12321 >', isPalindrome(12321));
// console.log('123456 >', isPalindrome(123456));
console.log('9999 >', isPalindrome(9999));
