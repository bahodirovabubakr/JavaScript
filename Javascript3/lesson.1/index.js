// let obj = {
//     id: 1,
//     name: "Eshmat",
//     age: 30,
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 5,
//     },
// };

// let {name:pName, age:pAge, child:{name:chName, age: chAge}} = obj;

// console.log(pName);
// console.log(pAge);
// console.log("===============");
// console.log(chName);
// console.log(chAge);

// let obj1 = { id: 1, name: "Ali" };
// let obj2 = { age: 20, location: "Namangan, chust" };

// let obj = { ...obj1, ...obj2 }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// let arr = { ...arr1, ...arr2 }
// console.log(arr);
let sum1 = 0;
let sum2 = 0;
let arr1 = [4, 7, 5, 1];
let arr2 = [10, 20, 15];
let arr = [...arr1, ...arr2];
function javob(a, b, ...arr){
    let sum1 = a+b
    let sum2 = arr.reduce((c, d) => c+d, 0)
    console.log(sum2/sum1);
    
}

javob(...arr);

