module.exports = function countCats(matrix) {
  let result = 0;
  for (let x = 0; x < matrix.length; x++) {
    const row = matrix[x];
    for (let y = 0; y < row.length; y++) {
      const cell = row[y];
      if(cell == '^^')
      {
        result += 1;
      }
    }
  }
  return result;
};
