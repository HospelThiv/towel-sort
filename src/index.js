
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arraySort = [];
  if (!matrix || matrix == undefined) return arraySort;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      i % 2
        ? arraySort.push(matrix[i][matrix[i].length - j - 1])
        : arraySort.push(matrix[i][j]);
    }
  }
  return arraySort;
}
