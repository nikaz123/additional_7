module.exports = function solveSudoku(matrix) {
    


    let matrixSimple = [];  /// исходный массив пеерделали в простой массив

    for (let i = 0; i < matrix.length; i++)
        if (!Array.isArray(matrix[i]))
            matrixSimple.push(matrix[i]);
        else
            matrixSimple = matrixSimple.concat(matrix[i]);


    function checkNumber(num, row, col) {           ///кондитата выбираем
        for (let i = 0; i < 9; i++) {
            let index = ((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(col / 3) * 3) + (i % 3);
            if (num === matrixSimple[(row * 9) + i] || num === matrixSimple[col + (i * 9)] || num === matrixSimple[index]) {
                return false;
            }
        }
        return true;
    }

    function getNumber(index) {
        if (index >= matrixSimple.length) {
            return true;
        }
        else if (matrixSimple[index] !== 0) {
            return getNumber(index + 1);
        }

        for (let i = 1; i <= 9; i++) {
            if (checkNumber(i, Math.floor(index / 9), index % 9)) {
                matrixSimple[index] = i;
                if (getNumber(index + 1)) {
                    return true;
                }
            }
        }
        matrixSimple[index] = 0;
        return false;
    }

    function resultMatrix(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i += 9) {
            result.push(arr.slice(i, i + 9));
        }
        return result;
    }

    if (getNumber(0)) return resultMatrix(matrixSimple);
};


