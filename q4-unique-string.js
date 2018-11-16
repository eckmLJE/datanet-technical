// Question 4 (unique characters)

// There are three approaches below. The fastest is the one
// using a hash table. See output tests with timing at the bottom.

const sampleArray = [
  "abcdefghijklmnopqrstuvwxyz", // true
  "abcdefgghijklmnop", // false
  "abcdefghijkllmnop", // false
  "abcdefghijklmnopqrstuvwxyz12345678910", // true
  "abcdefghijklmnopp" // false
];

// 1. This method uses .filter (performed during interview yesterday)

const uniqueFilterFunc = (value, index, self) => self.indexOf(value) === index;

const uniqueStringFilter = str => {
  console.time("filterSave");
  let strArr = str.split("");
  let filteredArr = strArr.filter(uniqueFilterFunc);
  console.timeEnd("filterSave");
  return strArr.length === filteredArr.length;
};

// 2. This approach uses .includes with an array

const uniqueStringArr = (str, testArr) => {
  console.time("includesSave");
  const strArr = str.split("");
  for (i = 0; i < strArr.length; i++) {
    if (testArr.includes(strArr[i])) {
      console.timeEnd("includesSave");
      return false;
    } else {
      testArr.push(strArr[i]);
    }
  }
  console.timeEnd("includesSave");
  return true;
};

// 3. This approach is fastest and uses a hash table

const uniqueStringObj = (str, testObj) => {
  console.time("hashSave");
  const strArr = str.split("");
  for (i = 0; i < strArr.length; i++) {
    if (!!testObj[strArr[i]]) {
      console.timeEnd("hashSave");
      return false;
    } else {
      testObj[strArr[i]] = true;
    }
  }
  console.timeEnd("hashSave");
  return true;
};

console.log("*** Array .filter ***");
sampleArray.forEach(str => console.log(uniqueStringFilter(str)));

console.log("*** Array .includes ***");
sampleArray.forEach(str => console.log(uniqueStringArr(str, [])));

console.log("*** Hash method ***");
sampleArray.forEach(str => console.log(uniqueStringObj(str, {})));

// OUTPUT

// *** Array .filter ***
// filterSave: 0.619ms
// true
// filterSave: 0.045ms
// false
// filterSave: 0.005ms
// false
// filterSave: 0.007ms
// false
// filterSave: 0.005ms
// false

// *** Array .includes ***
// includesSave: 0.490ms
// true
// includesSave: 0.017ms
// false
// includesSave: 0.005ms
// false
// includesSave: 0.028ms
// false
// includesSave: 0.019ms
// false

// *** Object method ***
// hashSave: 0.084ms
// true
// hashSave: 0.010ms
// false
// hashSave: 0.006ms
// false
// hashSave: 0.029ms
// false
// hashSave: 0.007ms
// false
