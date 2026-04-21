function pascal(num) {
  let mat = [];
  for (let i = 0; i < num; i++) {
    mat[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        // fill the first column and the diagonal
        mat[i][j] = 1;
      } else {
        // fil the center of the triangle
        mat[i][j] = mat[i - 1][j] + mat[i - 1][j - 1];
      }
    }
  }
  return mat;
}

function logPascalTri(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    for (let s = 0; s < mat[i].length; s++) {
      row += mat[i][s] + " ";
    }
    console.log(row);
  }
}

logPascalTri(pascal(5));
