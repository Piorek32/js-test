// 4.Reverse Array

const reverseArray = n => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = i + 1;
  }
  return array.reverse();
};

console.log(reverseArray(3))

// 5.Palindrome

const palindrome = (string) => {
  let str = "";
  let arrayFromString = string.split("");

  arrayFromString.forEach(val => {
    var reg = /^[a-z]+$/i;
    if (reg.test(val)) {
      str += val;
    }
  });
  let reversString = str
    .split("")
    .reverse()
    .join("");
  if (str === reversString) {
    return true;
  }
  return false;
};
console.log(palindrome("abut-1-tuba"))
//6.Permutation

const perm = tab1 => {
  let ret = [];
  for (let i = 0; i < tab1.length; i = i + 1) {
    let rest = perm(tab1.slice(0, i).concat(tab1.slice(i + 1)));

    if (!rest.length) {
      ret.push([tab1[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([tab1[i]].concat(rest[j]));
      }
    }
  }
  return ret;
};
function compare(arr1, arr2) {
  let result;
  arr1.forEach((e1, i) =>
    arr2.forEach(e2 => {
      if (e1.length > 1 && e2.length) {
        result = compare(e1, e2);
      } else if (e1 !== e2) {
        result = false;
      } else {
        result = true;
      }
    })
  );
  return result;
}

permutation = (tab1, tab2) => {
  let arrayOfperm = perm(tab1);
  for (let i = 0; i < arrayOfperm.length; i++) {
    if (compare(arrayOfperm[i], tab2)) {
      return true;
    }
  }
  return false;
};

console.log(permutation([1, 2, 4], [2, 1, 5]));

//7.Existing powers of 2

const check = (...variables) => {
  let result = [];
  let array = variables.map(val => Math.pow(val, 2));
  array.forEach(val => {
    if (val % 2 === 0) {
      result.push(val);
    }
  });
  let sorted = result.sort((a, b) => {
    if (a > b) return 1;
  });
  return sorted;
};

console.log(check(8, 2, 4));

//9.Optional Power
const optionalPow = (n, m) => {
  if (true) {
    return Math.pow(n, m);
  } else return Math.pow(m, n);
};
console.log(optionalPow(2,3))

///10.Fix age

let testedArray = [5, 15, 25, 78, 59, 45];
const fixAge = tab => {
  let array = tab.filter(val => val >= 18 && val < 61);
  console.log(array);
};

fixAge(testedArray)
//11.Common Digit

const commonDigit = (n, tab) => {
  let arrayofCountedNumbers = [];
  let stringfromArray = "";
  tab.forEach(val => {
    stringfromArray += val.toString();
  });
  for (let i = 0; i < n + 1; i++) {
    let count = 0;
    for (j of stringfromArray) {
      if (j === i.toString()) {
        count++;
      }
    }
    arrayofCountedNumbers.push({
      index: i,
      numberOfCounts: count
    });
  }
  let sorted = arrayofCountedNumbers.sort((a, b) => {
    if (a.numberOfCounts < b.numberOfCounts) {
      return 1;
    }
  });
  return sorted[0].index;
};
console.log(commonDigit(4, [101, 20, 21, 3]));

//12.Digit Sum
const digitSum = (n, tab) => {
  let test = [];
  let array = tab.map(val => val.toString());
  array.forEach((val, i) => {
    let count = 0;
    for (number of val) {
      count += parseInt(number);
    }
    test.push(count);
  });
  let max = 0;
  let indexOfMax = 0;
  test.forEach((val, i) => {
    if (val > max) {
      max = val;
      indexOfMax = i;
    }
  });
  return indexOfMax;
};

console.log(digitSum(3, [20, 21, 19]));
