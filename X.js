function drawX(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if (i === j || j === n - 1) line += "*";
      else line += " ";
    }
    console.log(line);
  }
}

function drawDiagonal(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if (i === j) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
function drawLeftDiagonal(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if (j === n - i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
drawDiagonal(11);
drawLeftDiagonal(11);
drawX(11);
