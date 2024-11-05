let A = getArray("A");
console.log(`Масив A: ${A}`);
let B = getArray("B");
console.log(`Масив B: ${B}`);

if (A.length !== 10 || B.length !== 10) {
    console.log("Довжина як мінімум 1 масиву не рівна 10");
} else {
    // Перетворення елементів масивів на числа
    A = A.map(Number);
    B = B.map(Number);

    // Перевірка, чи всі елементи є числами
    if (A.some(isNaN) || B.some(isNaN)) {
        console.log("Всі елементи масивів повинні бути числами.");
    } else {
        let ResultArray = createArray(A, B);
        console.log(`Результат: ${ResultArray}`);

        // Знаходимо і міняємо максимальний елемент з першим
        let MaxElementIndex = ResultArray.indexOf(Math.max(...ResultArray));
        let tmp = ResultArray[0];
        ResultArray[0] = ResultArray[MaxElementIndex];
        ResultArray[MaxElementIndex] = tmp;
        console.log(`Результат перестановки: ${ResultArray}`);

        // Сортуємо ResultArray методом бульбашки
        bubbleSort(ResultArray);
        console.log(`Результат сортування: ${ResultArray}`);
    }
}

// Функція для отримання масиву від користувача
function getArray(nameOfArray) {
    let userInput = prompt(`Введіть 10 елементів масиву ${nameOfArray} через кому`);
    return userInput.split(/ *, */);
}

// Функція для створення нового масиву на основі двох вхідних
function createArray(array1, array2) {
    let resultArray = [];
    if (array1.length !== array2.length) {
        console.log("array1.length != array2.length");
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
                resultArray[i] = 1;
            } else {
                resultArray[i] = 1 / (array1[i] - array2[i]);
            }
        }
    }
    return resultArray;
}

// Функція для сортування масиву методом бульбашки
function bubbleSort(array) {
    let arrayLength = array.length;
    let swapped;

    do {
        swapped = false; 
        for (let i = 0; i < arrayLength - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Поміняти елементи
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true; 
            }
        }
    } while (swapped); 
}
