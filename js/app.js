"use strict";


// ==========================> 1- rasm <==========================

// ==========> 1- masala <==========

// function inverseNumber(number) {
//     let reverse = number.toString().split('').reverse().join('');
//     return reverse;
// }

// let num = 567;
// let reverse = inverseNumber(num);
// console.log(reverse);


// ==========> 2 - masala <==========

// function faktorial(son) {

//     if (son < 0) {
//         return "Faktorial faqat musbat sonlar uchun mavjud!";
//     } else if (son === 0 || son === 1) {
//         return 1;
//     } else {
//         return son * faktorial(son - 1);
//     }
// }

// let son = 5;
// let natija = faktorial(son);
// console.log(son + " sonining faktoriali: " + natija);


// ==========> 3 - masala <==========

// function compareAges(obj1, obj2) {
//     if (obj1.age > obj2.age) {
//         console.log(obj1.name);
//     } else if (obj1.age < obj2.age) {
//         console.log(obj2.name);
//     } else {
//         console.log('Both are of the same age');
//     }
// }


// const person1 = { name: 'Alice', age: 30 };
// const person2 = { name: 'Bob', age: 25 };

// compareAges(person1, person2);  



// ==========> 4 - masala <==========

// function chiqarish(n) {
//     if (n < 1) {
//         return;
//     } else {
//         chiqarish(n - 1);
//         console.log(n);
//     }
// }
// let son = 5;
// chiqarish(son);



// ==========> 5 - masala <==========

// let user = {name : 'Shaxzod'};
// let age = {age : 25};
// let userJob = {job : 'Developer'};

// let result = Object.assign(user, age, userJob);
// console.log(result);


// ==========> 6 - masala <==========

// let salaries = {
//     aXodim : 150,
//     bXodim : 180,
//     cXodim : 210
// }

// function money(){
//     let allMoney = Object.values(salaries);
// let sum = 0;

// for (let i = 0; i < allMoney.length; i++){
//     sum += allMoney[i];
// }
// console.log(sum);
// }
// money()


// ==========> 7 - masala <==========

// let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sum(numbersArr));    


// ==========> 8 - masala <==========

// let arr = [2,4,6,7,true,null,undefined];

// function check(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'undefined') {
//             arr[i] = 0;


//         }
//         console.log(arr[i]);    
//     }
// }
// check(arr)






// ==========================> 2 - rasm <==========================


// ==========> 1 - masala <==========

// let arr = [
//     {
//         name: 'Abdulloh',
//         age: 21,
//         status: false
//     },
//     {
//         name: 'Botir',
//         age: 18,
//         status: true
//     },

//     {
//         name: 'Abdulloh',
//         age: 12,
//         status: false
//     },

// ]

// function arrFunc(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].status == false) {
//             console.log(arr[i]);
//         }
//     }
// }
// arrFunc(arr)



// ==========> 2 - masala <==========

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function addTwoNumbersFromArray(index1, index2) {
//     if (index1 < 0 || index1 >= numbers.length || index2 < 0 || index2 >= numbers.length) {
//         return "Indekslar massiv chegaralaridan tashqarida!";
//     }
//     return numbers[index1] + numbers[index2];
// }

// let index1 = 6; 
// let index2 = 9; 
// let result = addTwoNumbersFromArray(index1, index2);

// console.log(` ${index1} + ${index2} = ${result - 2}`); 


// ==========> 3 - masala <==========

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [12, 13, 14, 4, 20, 9, 1];

// function arrFunc(arr1, arr2) {
//     let count = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 console.log(arr1[i]);
//                 count++;
//             }
//         }
//     }
//     console.log(`Bir xil elementlar soni: ${count}`);
// }

// arrFunc(arr1, arr2);



// ==========> 4 - masala <==========

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [12, 13, 14, 4, 20, 9, 1];

// function findMax(arr1, arr2) {
//     let max = arr1[0]; 


//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > max) {
//             max = arr1[i];
//         }
//     }


//     for (let j = 0; j < arr2.length; j++) {
//         if (arr2[j] > max) {
//             max = arr2[j];
//         }
//     }

//     return max;
// }

// let maxNumber = findMax(arr1, arr2);
// console.log(` eng katta son: ${maxNumber}`);

// ==========> 5 - masala <==========

// let userInput = +prompt("1 dan katta bo'lgan sonni kiriting:");

// if (userInput <= 1) {
//     console.log("Iltimos, 1 dan katta bo'lgan butun son kiriting.");
// } else {
//     for (let i = 1; i <= userInput; i++) {
//         console.log(i);
//     }
// }





// ==========================> 2 - rasm <==========================

// ==========> 1 - masala <==========

// function createArray(size) {
//     const array = [];

//     for (let i = 1; i <= size; i++) {
//         const obj = {
//             ID: +prompt(`id kiritng`),
//             NAME: prompt(`ismingizni kiritng`),
//         };
//         array.push(obj);
//     }

//     console.log(array);
// }


// const size = prompt("Massiv o'lchamini kiriting:");
// createArray(size);



// ==========> 2 - masala <==========

// let returnNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// function uniqueNumbers(arr) {
//     let uniqueArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray;
// }
// const uniqueArray = uniqueNumbers(returnNumber);
// console.log(uniqueArray);


// ==========> 3 - masala <==========
// let arr = [88,75,342,21,45,67];

// function arrFunc(arr) {
//     let enterNum = +prompt("Sonni kiriting:");
//     if(arr.includes(enterNum)) {
//        let index = arr.indexOf(enterNum);
//        console.log(`Bu son massivda bor: ${enterNum} indexi: ${index}`);
//     }else{
//         console.log("Bu son massivda yoq");
//     }
// }

// arrFunc(arr)



// ==========> 4 - masala <==========

// let numbers = [88, 75, 342, 21, 45, 67];

// function arrFunc(arr) {
//     let enterNum = +prompt("Sonni kiriting:");
//     if (arr.includes(enterNum)) {

//         let index = arr.indexOf(enterNum);
//         arr.splice(index, 1);
//         console.log(arr);
//     } else {
//         console.log("Bu son massivda yo'q");
//     }
// }
// arrFunc(numbers);



// ==========> 5 - masala <==========
