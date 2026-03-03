// let a = "5";
// let b = 2;

// console.log(typeof a+b);
// console.log(a*b);

//2
// let num = 7;
// if (num % 2 === 1) {

// console.log("toq");
// } else {
//     console.log("juft");
// }

//3

// for (let  i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//     console.log( i," - juft");
//     }
// }

//4 
// let arr1 = 4;
// let arr2 = 9;

// function max(a, b) {
//     if (a < b) {
//         console.log(b, "katta");
        
//     } else{
//         console.log(a, "katta");
        
//     }
// };

// max(4,9)

//5

// let username = ""
// let defaultName = "Guest"
// console.log(username || defaultName);
// console.log(username ?? defaultName);

//7
// let user = {
//     name: "Ali",
//     age:20

// };

// let key = "age";
// console.log(user[key]);

// //8
// let obj1 = {a:1, b:2};
// let obj2 = Object.assign({}, obj1);
// obj2.a = 100;
// console.log(obj1);
// console.log(obj2);

//9 
function User(name, age) {
    this.name = name;
    this.age = age;
}

let ul = new User("Ali", 20);
console.log(ul.name);
