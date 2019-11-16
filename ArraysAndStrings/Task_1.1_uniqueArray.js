// check if a string has anly unique elements.
// Solution 1.
//let string = "olala";
function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[i] == string[j] && i !== j) {
        return false;
      }
    }
  }
  return true;
}
function testIsUniqueGivenUniqueString() {
  assert(isUnique("maciek") === true);
}
function testIsUniqueGivenNotUniqueString() {
  assert(isUnique("Olala") === false);
}
testIsUniqueGivenUniqueString();
testIsUniqueGivenNotUniqueString();
function assert(test) {
  if (test == false) {
    throw new Error("Test failed");
  }
}

//Solution 2 sorting
function isUniqueWithSorting(string) {
  const sortedString = string
    .split("")
    .sort()
    .join("");

  for (let i = 0; i < sortedString.length - 1; i++) {
    if (sortedString[i] == sortedString[i + 1]) {
      return false;
    }
  }
  return true;
}
function testIsUniqueWithSortingGivenUniqueString() {
  assert(isUniqueWithSorting("maciek") === true);
}
function testIsUniqueWithSortingGivenNotUniqueString() {
  assert(isUniqueWithSorting("Olala") === false);
}
testIsUniqueWithSortingGivenUniqueString();
testIsUniqueWithSortingGivenNotUniqueString();

//solution 3 Optimal dictionary
function isUniqueDictionary(string) {
  let dictionary = {};
  for (let i = 0; i < string.length; i++) {
    if (dictionary[string[i]] === true) {
      return false;
    } else {
      dictionary[string[i]] = true;
    }
  }
  return true;
}

function testIsUniqueDictionaryGivenUniqueString() {
  assert(isUniqueDictionary("maciek") === true);
}
function testIsUniqueDictionaryGivenNotUniqueString() {
  assert(isUniqueDictionary("Olala") === false);
}
testIsUniqueDictionaryGivenUniqueString();
testIsUniqueDictionaryGivenNotUniqueString();
