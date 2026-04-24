/*****
 *
 *
 * the idea is to slice the array into two parts , and keep slicing it and compairing the first element of each two neighboured arrays, and insert the targeted element by the condition in the merged array
 * the algo use two function one the merge arrays , and one to keep slicing and comparing,
 *
 * when hearing keep  "which means keep doing the process on the child arrays" this can mean using recursion
 */

function merge(left, right) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

// let arr = [5,4,68,9,1],[3,4,6,1,5]
// let arr = [5,4],[68,9,1],[3,4],[6,1,5]
// let arr = [5],[4],[68],[9,1],[3],[4],[6],[1,5]
// let arr = [5],[4],[68],[9],[1],[3],[4],[6],[1],[5]
// from here start the comparison
// arr = 4 5 9 68 1 3 4 6 1 5
// arr = 4 5 9 1 68 3 4 1 6 5
// arr = 4 5 1 9 3 68 4 1 6 5

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

let arr = [5, 4, 68, 9, 1, 3, 4, 6, 1, 5];
let res = mergeSort(arr);
console.log(res);
