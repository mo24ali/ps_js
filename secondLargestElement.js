
let tab = [1, 28, 3, 4, 6, 28, 3, 6, 5, 7, 7];

function triArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

function secondLargert(tab) {
  //   let tab2 = tab.sort();
  triArr(tab);
  let varTri = new Set();

  for (let i = 0; i < tab.length; i++) {
    varTri.add(tab[i]);
  }
  let tab3 = Array.from(varTri);
  console.log(tab3[1]);
}

secondLargert(tab);
