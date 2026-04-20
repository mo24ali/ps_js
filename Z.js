function drawZ(num) {
  let mat = [];
  for (let i = 0; i < num; i++) {
    let row = [];

    for (let j = 0; j < num; j++) {
      if (
        i === 0 ||              // top row
        i === num - 1 ||        // bottom row
        j === num - 1 - i       // diagonal
      ) {
        row.push("#");
      } else {
        row.push(" ");
      }
    }

    mat.push(row);
  }
  return mat
}



console.log(drawZ(5))