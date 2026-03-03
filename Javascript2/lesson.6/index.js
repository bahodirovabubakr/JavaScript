// Array 

// let arr1 = [];
// let arr2 = Array();
// let arr3 = new Array();❌

// let arr = [];

// let arr1 = [];
// arr1[0] = "Olma";
// arr1[1] = "Uzum";
// arr1[3] = "Nok";

// let arr = Array(5, 2);
// arr[1] = "Ofxord";
// arr[3] = "Algoritm";
// console.log(arr2);


// let arr2 = Array("");
// console.log(arr2);

// let arr = ["Olma", ]

// console.log("==============================");

let arr = ["Olma", "Uzum", "Olcha", "Gilos"];

// for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    
    // }

    // console.log("==============================");
    
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// let k = 0;
// do {
//     console.log(arr[k]);
//         k++;
// }        while (k < arr.length)   

// for (let value of arr) {
//     console.log(value);
    
// }

// let nestedArr = [
//     ["uzum,", 2, 3],
//     [4, "olma", 6],
//     [7, 8, "nok"],
// ]

// let sum = 0;

// for (let arr of nestedArr) {
//     for (let value of arr) {
//         if(typeof value === "number") {
//             sum+= value;
//         }
//     } 
// }

// console.log(sum);

// console.log("==============================");
// for(let k = 1; k <=9; k++) {
//     for(let a = 1; a <=10; a++)
//         console.log(`${k} * ${a} = ${k*a}`);

//     console.log("=====================");
    
        
// }

// Homework ========
let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let product = 1;

for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    product *= nestedArr[i][j];
  }
}

console.log(product);

let nestedArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let product1 = 0;

for (let i = 0; i < nestedArr1.length; i++) {
  for (let j = 0; j < nestedArr1[i].length; j++) {d
    product1 += nestedArr1[i][j];
  }
}

console.log(product1);
