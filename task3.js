let firstArray = getArray(1);
console.log(`firstArray: ${firstArray}`);
let secondArray = getArray(2);
console.log(`secondArray: ${secondArray}`);
let maxLength = Number(prompt(`Введіть максимальну довжину масиву-результату`));
console.log(`MaxLength = ${maxLength}`);

if(isNaN(maxLength))
    console.log("maxLength не є числом");
else
    console.log(`Результат: ${makeArray(firstArray, secondArray, maxLength)}`);

function getArray(numOfArray){
    let userInput = prompt(`Введіть елементи Array${numOfArray} через кому`);
    return userInput.split(/ *, */);
}
function makeArray(firstArray ,secondArray ,maxLength ){
    let uniteArray = [...firstArray, ...secondArray];
    if(uniteArray.length> maxLength){
        return uniteArray.slice(0, maxLength);
    }
        
    return uniteArray;
}