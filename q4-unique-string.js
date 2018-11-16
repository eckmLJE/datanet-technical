// Question 4 (unique characters)

const sampleArray = [
  "abcdefghijklmnopqrstuvwxyz", // true
  "abcdefgghijklmnop", // false
  "abcdefghijkllmnop", // false
  "abcdefghijklmnopqrstuvwxyz123456789", // true
  "abcdefghijklmnopp" // false
];

// This method uses .filter (performed during interview yesterday)

const uniqueFilterFunc = (value, index, self) => self.indexOf(value) === index;

const uniqueStringFilter = str => {
  const strArr = str.split("");
  let filteredArr = strArr.filter(uniqueFilterFunc);
  return strArr.length === filteredArr.length;
};

// This approach uses a hash table. The advantage is that
// it will return false immediately upon reaching a non-unique
// element in the array.

const uniqueStringObj = (str, testObj) => {
  const strArr = str.split("");
  for (i = 0; i < strArr.length; i++) {
    if (!!testObj[strArr[i]]) {
      return false;
    } else {
      testObj[strArr[i]] = true;
    }
  }
  return true;
};

console.log("*** Array .filter ***");
sampleArray.forEach(str => console.log(uniqueStringFilter(str)));

console.log("*** Hash method ***");
sampleArray.forEach(str => console.log(uniqueStringObj(str, {})));
