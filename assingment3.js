function processArray(arr, callback) {
    let result = [];
    for (let x = 0; x < arr.length; x++) {
        let value = callback(arr[x]);
        if (value !== null) {
            result.push(value);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5, 6];
// 2. Square every number
function square(num) {
    return num * num;
}
let Arr = processArray(numbers, square);
console.log("Original arr:",numbers);
console.log("Square:", Arr);
// 3. Return only even numbers
function even(num) {
    if (num % 2 == 0){
        return num;
    }
    return null;
}
let evenRes = processArray(numbers, even);
console.log("Even Numbers:", evenRes);

// TASK 4 pass a string

function processString(str, callback) {
    return callback(str);
}
// TASK 5: CONVERT STRING TO UPPERCASE
function UPPERCASE(str){
    return str.toUpperCase();
}
let str = "hello world"
let capital = processString(str,UPPERCASE)
console.log(capital)

// TASK 6: COUNT WORDS IN SENTENCE
// TASK 7 opration
function calculate(a, b, callback) {
    return callback(a, b);
}
            // 8
//add
function add(x,y){
    return x+y
}
console.log(calculate(10,5,add))
// SUBTRACTION
function sub(x,y){
    return x-y
}
console.log(calculate(10,5,sub))
// MULTIPLY
function mul(x,y){
    return x*y
}
console.log(calculate(10,5,mul))
// DIVISION
function div(x,y){
    if(y == 0 ){
        return "error";
    }else{
    return x/y
}
}
console.log(calculate(10,0,div))
// TASK 9: FIND ELEMENT
function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
