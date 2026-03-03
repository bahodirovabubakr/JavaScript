// let parent = {
//     id: 1,
//     name: "Ali",
//     age: 40,
//     work: "Teacher",
//     getData: function () {
//         console.log(this.name);  
//     },
// }

// let cloneObj = parent;
// parent = null;
// cloneObj.getData();

function Shablon(name, age) {
    this.name = name;
    this.age = age;
}

let obj1 = new Shablon("Eshmat", 20)
let obj2 = new Shablon("Eshmat", 25)
console.log(obj1, obj2);

function Shab(name, age) {
    this.name = name;
    this.age = age;
}

let obj3 = new Shab("Toshmatt", 15)
let obj4 = new Shab(20, "Toshmat")
console.log(obj3, obj4);

function Abubakr(name, age) {
    this.name = name;
    this.age = age;
}

let obj5 = new Abubakr("Bahodirov", 13)
let obj6 = new Abubakr("zaynab", 15)
console.log(obj5, obj6);

function Sh(name, age) {
  this.name = name;
  this.age = age;
}

let obj7 = new Sh("Bahrom", 33);
let obj8 = new Sh("Atamarye", 30);

console.log(obj7);
console.log(obj8);

function Imo(name, age) {
  this.name = name;
  this.age = age;
}

let obj9 = new Imo("Isoqjon", 11);
let obj10 = new Imo("Isoqjon", 13);

console.log(obj9);
console.log(obj10);