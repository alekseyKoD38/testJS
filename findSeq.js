function findSeq(arr, L, R) {

    if (L<=0){
        console.log("Error: размер последовательности не может быть меньше или равен 0");
        return 0;
    }
    let result = [];
    let rows = arr.length; // Количество строк (M)
    let cols = arr[0].length; // Количество столбцов (N)
    for (let F = 0; F < rows; F++) {

    for (let Y = 0; Y < cols; Y++) {
        if (F + L > cols) {
      break; }
      let allgood = true;

       for (let k = 0; k < L; k++) {
           let currentNumber = arr[F][Y + k];
           
           if (currentNumber % R !==0) {
            allgood = false;
            break;
           }
       }
    if (allgood === true) {

        let sequense = [];
        for  (let k = 0; k < L; k++) {
            sequense.push(arr[F][Y + k]);
        }
     result.push([[F,Y], sequense]);
     Y = Y + L - 1;
    }
    }
    }
    return result;
}
//ДАнные заданные в ТЗ
let arr = [
   [2, 4, 6, 7, 5, 3],
    [2, 4, 3, 8, 2, 5],
    [5, 3, 2, 4, 7, 0]
];

let atvet = findSeq(arr, 0, 2);
