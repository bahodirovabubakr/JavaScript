// let salom = "hi";

// let user = {
//     name: "Ali",
//     [salom]: 15,
//     [Symbol("phone")]: "+998 99 123 45 67",
// }

// for (let key in user) {
//     console.log(key);

// }

// let parent = {
//     name: "Eshmat",
//     age: 60,
//     child: {
//         name: "Toshmat",
//         age: 40,
//         subchild: {
//             name: "Gulmat",
//             age: 40,
//         },
//     },
// }

// let { name, age, child: {name: name2, subchild: { name: name3}}} = parent

// console.log(name);

// console.log(name2);
// console.log(name3);

// const obj = {
//     name: "Eshmat",
//     age: "17"
// }

// obj.name = "Ali";
// obj.age = 20;

// console.log(obj);

// homework

let parent = {
    name: "Eshmat",
    age: 60,
    child: {
        name: "Toshmat",
        age: 40,
        subchild: {
            name: "Gulmat",
            age: 40,
        },
    },
}

let { name, age, child: {name: name2, subchild: { name: name3}}} = parent

console.log(name);

console.log(name2);
console.log(name3);

let Abubakr = {
    ismi: "Yusuf",
    Yosh: 11,
    child: {
        name: "Toshmat",
        age: 40,
        subchild: {
            name: "Abubakr",
            age: 13,
        },
    },
}

let { ismi, yosh, child: {name: name5, subchild: { name: name4}}} = parent

console.log(name);

console.log(name5);
console.log(name4);



const ob1 = {
    name: "Eshmat",
    age: "14"
}

obj.name = "Ali";
obj.age = 20;

console.log(ob1);

const ob2 = {
    name: "Yusuf",
    age: "11"
}

obj.name = "Abubakr";
obj.age = 13;




