// object

// let obj = {};
// let obj2 = Object();
// let obj3 = new Object();  // Constructor

// let obj = {
//     ism: "Eshmat",
//     yosh: 20,
// };

// console.log(obj);

// //=============================================

// let person1 = {
//     name: "Abdulloh",
//     age: 12,
//     address: "Namamgan shahar",
// }

// let person2 = {
//     name: "Shahobiddin",
//     age: 12,
//     address: "Namamgan shahar",
// }

// // ==========================================

// let a = "type"

// let obj3 = {
//     name: "Olma",
//     color: "red",
//     kg: 1,
//     type: "5 yulduz"
// }

// console.log(obj3[a]);

// =============================================

let obj4 = {
    name: "Toshmat",
    age: 20,
};

let cloneObj = Object.assign({}, obj4)

cloneObj.name = "Eshmat";

console.log(obj4);
console.log(cloneObj);


// ==============================

// let obj1 = {id: 5, name: "Ali"};
// let obj2 = {age:20, address: "Namangan", name: "Vali"};
// let obj3 = {status: "Talaba", gender: "Male", name: "Salim"};

// let fullObj = Object.assign(obj2, obj3, obj1);

// console.log(fullObj)

// Homework =======================

let obj1 = {name: "Abubakr", surname: "Bahodirov", age: 12} 
let obj2 = {name: "apple", color: "green", age: 10} 

let address = Object.assign(obj1, obj2);

console.log(address);


let Abu = {
    name: "Umar",
    age: 10,
    address: "Toshkent shahar",
}

console.log(Abu);

let Ab2 = {
    name: "apple",
    color: "red",
    address: "Namanganda markazida",
}

console.log(Ab2);


let Ab3 = {
    name: "Korzinka",
    color: "red",
    address: "Namangan shahar",
}

console.log(Ab3);

let Ab4 = {
    name: "Abubakr",
    age: "19",
    address: "Namangan shahar",
}

console.log(Ab4);

let Ab5 = {
    name: "Ilyosbek",
    age: "13",
    year: 2012,
    address: "Namangan shahar",
}

console.log(Ab5);