// is Permutation ?
// Solution 1 with Sorting
function isPermutationWithSorting(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let sortedString1 = string1
    .split("")
    .sort()
    .join("");
  let sortedString2 = string2
    .split("")
    .sort()
    .join("");
  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1.charAt(i) != sortedString2.charAt(i)) {
      return false;
    }
  }
  return true;
}
console.log(isPermutationWithSorting("Ola", "laO"));
console.log(isPermutationWithSorting("", "laO"));
console.log(isPermutationWithSorting("Ola", "lka"));
console.log(isPermutationWithSorting("Olahaha", "laO"));

//Solution 2 with dictionary
function areDictionariesEqual(dic1, dic2) {
  for (let elem in dic1) {
    if (dic1.hasOwnProperty(elem)) {
      if (dic1[elem] != dic2[elem]) {
        return false;
      }
    }
  }
  return true;
}
function buildStringDesc(string, dic) {
  for (let i = 0; i < string.length; i++) {
    if (dic[string[i]] == undefined) {
      dic[string[i]] = 1;
    } else {
      dic[string[i]] += 1;
    }
  }
}
function isPermutationWithDictionary(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  s1dic = {};
  s2dic = {};
  buildStringDesc(string1, s1dic);
  buildStringDesc(string2, s2dic);
  return areDictionariesEqual(s1dic, s2dic);
}
function assert(test) {
  if (test == false) {
    throw new Error("Test failed");
  }
}
function testIsPermutationWithDictionaryGivenDifferentLength() {
  assert(isPermutationWithDictionary("Aleksandra", "Alekse") == false);
}

function testIsPermutationWithDictionaryGivenPermutation() {
  assert(isPermutationWithDictionary("Olalala", "alalalO") == true);
}
function testIsPermutationWithDictionaryGivenNotPermutation() {
  assert(isPermutationWithDictionary("Olalk", "klaot") == false);
}
function testIsPermutationWithDictionaryGivenemptyString() {
  assert(isPermutationWithDictionary("", "") == true);
}
testIsPermutationWithDictionaryGivenDifferentLength();
testIsPermutationWithDictionaryGivenPermutation();
testIsPermutationWithDictionaryGivenNotPermutation();
testIsPermutationWithDictionaryGivenemptyString();
