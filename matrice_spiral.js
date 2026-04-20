let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let top = 0,
  bottom = mat.length - 1,
  left = 0,
  right = mat[0].length - 1;

while (top <= bottom && left <= right) {
     // normal walk left -> right
  for (let i = left; i <= right; i++) {
    console.log(mat[top][i]);
  }
  top++;
 // normal walk: top -> bottom
  for (let i = top; i <= bottom; i++) {
    console.log(mat[i][right]);
  }
  right--;

  if (top <= bottom) {
    for (let i = right; i >= left; i--) {
      console.log(mat[bottom][i]);
    }
    bottom--;
  }

  if (left <= right) {
    for (let i = bottom; i >= top; i--) {
      console.log(mat[i][left]);
    }
    left++;
  }
}