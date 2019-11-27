function margeSortedArrays(a, b) {
  let left = a.length - b.length - 1;
  let right = b.length - 1;
  let placeholder = a.length - 1;

  while (right >= 0) {
    if (b[right] > a[left]) {
      a[placeholder] = b[right];
      right--;
    } else {
      a[placeholder] = a[left];
      left--;
      if (left < 0) {
        for (let i = right; i >= 0; i--) {
          placeholder--;
          a[placeholder] = b[i];
        }
        break;
      }
    }
    placeholder--;
  }
  return a;
}
console.log(margeSortedArrays([1, 2, 4, 6, 8, null, null, null], [3, 5, 7]));
console.log(margeSortedArrays([1, 2, 4, 6, 8, null, null, null], [1, 5, 7]));
console.log(
  margeSortedArrays([9, 10, 12, 15, 20, null, null, null], [3, 5, 7])
);
