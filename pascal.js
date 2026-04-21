

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

// logPascalTri(pascal(20));

let tab = [1, 28, 3, 4, 6, 28, 3, 6, 5 ,7 ,7];


function triArr(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length - 1 ; j++){
            if(arr[j] < arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
}


function secondLargert(tab) {
  let tab2 = tab.sort();
  let varTri = new Set();

  for (let i = 0; i < tab2.length; i++) {
    varTri.add(tab2[i]);
  }
  let tab3 = Array.from(varTri)
  console.log(tab3[tab3.length - 2]);
}


secondLargert(tab)