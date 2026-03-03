// let todos = [
//     { id: 1, text: "olma sotib ol", completed: false },
//     { id: 2, text: "Algoritm dars qil", completed: true }
// ];

// let arr = []

// let obj = prompt("id kiriting = ") =  {
//     text: "Salom",
//     commpleted: false
// }

// let obj1 = {
//     id: 2,
//     text: "salom",
//     commpleted: true
// }

// console.log(obj);
// console.log(obj1)


// const del = ((data) => {
//     let newArr = data.filter((obj) => {
//         obj.id !== 1
//     })
//     return newArr;
// })

// console.log(del);

// let obj1 = {
//     name:"Ali",
//     age: 20
// };

// let obj2 = {
//     status:"Talaba",
//     location: "Namangan shahar"
// };

// let action = (a, b) => {
//     let obj = Object.assign(a, b);
//     return obj.age % 2 ? `${obj.age} - bu Toq son.` : `${obj.age} - bu Juft son.`;  
// };

// console.log(action(obj1, obj2));

// let str = "A190r1tm";

// const action = (data) => {
//     let matn = "";
//     let raqam = "";
//     for (let v  of data) isNaN(v) ? (matn +=v) : (raqam +=v)
//     return `Matn = ${matn}, Raqam = ${raqam}`;
// }

// console.log(action(str));

// let sum = 0;
// for(let i=1; i <10; i++) {
//     sum+=i
// } 
// console.log(sum);

// let i = 0;
// let sum = 0;
// while(i <10) {
//     sum+=i;
//     i++;
// } 
// console.log(sum);

// let sum = 0;
// let i = 1;

// do {
//     sum+= i;
//     i++;
// } while(i <= 9);

// console.log(sum);

// let obj = {
//     ism: "Ali",
//     yosh: 20,
// };

// let cleaneobj = Object.assign({}, obj)

// cleaneobj.yosh = 22;
// console.log(cleaneobj);

// function Person(ism, yosh, shahar) {
//     this.ism = ism;
//     this.yosh = yosh;
//     this.shahar = shahar;
// }

// let obj = new Person("Ali", 20, "Namangan");

// for (let key in obj) {
//     console.log(obj[key]);
    
// }

// let { ism, yosh, shahar} = obj;  
// console.log(ism, yosh, shahar);
