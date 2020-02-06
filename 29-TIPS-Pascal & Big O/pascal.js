function pascal(n) {
  const rowsAr = [[1], [1, 1]];
  let prevRow = rowsAr[1];
  for (let i = 1; i < n - 1; i++) {
    let row = [1];
    let val = prevRow[0];
    for (let j = 0; j < prevRow.length - 1; j++) {
      row.push(val + (val = prevRow[j + 1]));
    }
    row.push(1);
    rowsAr.push(row);
    prevRow = row;
  }
  return rowsAr;
}

console.log(pascal(3));
console.log(pascal(4));
console.log(pascal(5));
