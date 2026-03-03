// let arr = ["Algoritm","Ofxord", "Ofxord (Kosonay fillali)"]

// 1 -usul
// let sum = 0;
// for(let str of arr) {
//     sum+= str.length;
// }

// console.log(sum);

// 2 -usul
// console.log(arr.join("").length);

// 2 -masalar

// let arr = [1, 3.2, 5, 4, 6.3, 7, 9, 1.4, 2.9];

// let sum = 0;
// for(let num of arr) {
//     if(!Number.isInteger(num)) {
//     sum+= num;
//    }
// }

// console.log(sum);

// 3 -masalar

// let arr = [true, "20", {name:"Eshmat"}, false, null, undefined, 3.9, 10];

// let sum = 0;
// for(let value of arr) {
//     if (!isNaN(parseFloat(value))) {
//         sum += parseFloat(value);
//     } 
//    }

// console.log(sum);

// Homework

// //some
// const Numbers = [1, 3, 3, -1, 4].some(function (item) {
//     return item < 0;
// });

// console.log(Numbers);

// // every
// const Numbers2 = [1, 2, -3].every(function (item) {
//     return item > 0;
// });
// console.log(Numbers2);



// //find
// const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
// const found = objects .find(function (item) {
//     return item.id === 'b';
// });
// console.log(found);

// // findIndex 
// const objects1 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
// const foundIndex = objects1 .find(function (item) {
//     return item.id === 'b';
// });
// console.log(foundIndex);

// homework//


// forEach()

// let arr = ["Olma", "Uzum", "Shaftoli"];
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // forEach() -------------------------------
// forEach(callBack);
// let sum = 0;
// forEach((value) => {
//   sum += arr;
// });
// console.log(sum);

// // map() -------------------------------
// arr.map(callBack Function);
// let newArr = arr.map((value) => {
//   return value * arr;
// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// [1, 4, 3, 16]
// let newArr = arr.map((value, index, a) => {
//   if (index % 2) return value ** 2;
//   return value;
// });
// // console.log(newArr);

// let newArr = arr.map((value) => {
//   if (!(value % 2)) return value;
// });
// console.log(newArr);

// filter() ------------------------------

// arr.filter(callBack)
// let newArr = arr.filter((value) => value % 2);
// console.log(newArr);

// let arr = ["Olma", "Uzum", "Nok"]; // ["Olma", "Uzum"]


// let arr = ["apple", "banana", "car", "dog", "eag", "fruits"];

// let newValue = arr.find((value) => value.length === 3);
// console.log(newValue);

// let newIndex = arr.findIndex((value, index) => value.length === 3);
// console.log(newIndex);

// let newLastIndex = arr.findLastIndex((value, index) => value.length === 3);
// console.log(newLastIndex);

// =============================================

// let nums = [7, 10, 3, 6, 1, 20, 9, 2, 5]; // [1, 2, 3, 5, 6, 7, 9]
// // sort()
// let newNums = nums.sort((a, b) => b - a);
// console.log(newNums);

// let strs = ["Olma", "Uzum", "anor", "Gilos", "Nok"];

// let newStrs = strs.sort((a, b) => a.localeCompare(b));

// console.log(newStrs);

// =============================================

// every(), some()

// let arr = [1, 2, 3, 4, 5, 6, null, undefined];

// let isTrue = arr.every((v) => v);

// console.log(isTrue);

// function sum(arr) {
//   let kopaytma = 1;
//   if (arr.every((n) => n)) {
//     for (let n of arr) kopaytma *= n;
//     return kopaytma;
//   }
//   return "Siz Arrayda noto'g'ri qiymat kiritdingiz.";
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 10]));

// let arr = [false, "", 0];
// let data = arr.some((v) => v);
// console.log(data);


let obj1 = {
  id: 1,
  ism: "Abubark",
  familiya: "Bahodirov",
  yosh: 12,
  manzil: "Lola",
  tel_raqam: "+998 917 55 08 03",
};

let obj2 = {
  id: 2,
  ism: "Zaynab",
  familiya: "Bahodirova",
  yosh: 14,
  manzil: "Lola",
  tel_raqam: "+998 91 348 87 99",
};

let obj3 = {
  id: 3,
  ism: "dilshod",
  familiya: "Manachnip",
  yosh: 12,
  tel_raqam: "+998 77 190 48 75",
};
let obj4 = {
  id: 4,
  ism: "Usmon",
  familiya: "Bahodirov",
  yosh: 9,
  manzil: "lola",
  tel_raqam: "+998 77 777 55 54",
};
let obj5 = {
  id: 5,
  ism: "Muhhammad",
  familiya: "Bahodirov",
  yosh: 2,
  manzil: "lola",
  tel_raqam: "+998 77 008 17 67",
};



console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);