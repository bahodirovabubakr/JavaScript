// let obj = {
//     name: "Eshmat",
//     age: 40,
//     child: {
//     neme: "Toshmat",
//     age: 20,
//     },
// };

// let cloneObj = structuredClone(obj);

// cloneObj.child.name = "Toshmatjon";

// console.log(obj);
// console.log(cloneObj);

// let obj = {
//     id: 1,
//     name: "Ali",
//     surname: "Valiyev",
//     status: "stutent",
//     age: 22,
//     adddress: "Tashkent shahar",
// };

// for (let key in obj) {
//     console.log(key, " = ", obj[key]);
    
// }

// let sum = 1;
// let laptop = {
//     name:"Mac",
//     price: 1000,
//     chip: "M4",
//     count: 5,
// };

// for (let key in laptop) {
//     if(typeof laptop[key] === "number") sum *= laptop[key];
// }

// console.log(sum);

// Homework \\\\\\\\\

let obj = {
    name: "Bahrom",
    age: 33,
    child: {
    neme: "Bahtiyor",
    age: 48,
    },
};
    
let cloneObj = structuredClone(obj);

cloneObj.child.name = "Bahtiyorjon";

console.log(obj);
console.log(cloneObj);


let ob1 = {
    name: "Abror",
    age: 13,
    child: {
    neme: "Azizbek",
    age: 13,
    },
};

let cloneObj1 = structuredClone(obj);

cloneObj.child.name = "Azizbekjon";

console.log(ob1);
console.log(cloneObj1);


let ob3 = {
    id: 1,
    name: "samil",
    surname: "Bahodiwor",
    status: "stutent",
    age: 15,
    adddress: "Nammangan shahar",
};

for (let key in ob3) {
    console.log(key, " = ", ob3[key]);
    
}

let ob4 = {
    id: 1,
    name: "Aisher",
    surname: "Valisher",
    status: "stutent",
    age: 12,
    adddress: "Namangan shahar",
};

for (let key in ob4) {
    console.log(key);
    
}

let ob5 = {
    id: 1,
    name: "Dilshod",
    surname: "Vadilshod",
    status: "stutent",
    age: 15,
    adddress: "Andijon shahar",
};

for (let os in ob5) {
    console.log(os);
    
}

let sum = 1;
let pizza = {
    name:"Mac",
    price: 120,
    chip: "M5",
    count: 4,
};

for (let key in pizza) {
    if(typeof pizza[key] === "number") sum += pizza[key];
}

console.log(sum);

let sum1= 0;
let cholate = {
    name:"Mac",
    price: 49,
    chip: "M1",
    count: 1,
};

for (let key in cholate) {
    if(typeof cholate[key] === "number") sum1 += cholate[key];
}

console.log(sum1);

let sum2= 0;
let uzum = {
    name:"Mac",
    price: 14,
    chip: "M1",
    count: 1,
};

for (let key in uzum) {
    if(typeof uzum[key] === "number") sum2 += uzum[key];
}

console.log(sum2);


let sum3= 0;
let kartoshka = {
    name:"Mac",
    price: 6,
    chip: "M1",
    count: 1,
};

for (let key in kartoshka) {
    if(typeof kartoshka[key] === "number") sum3 += kartoshka[key];
}

console.log(sum3);

let sum4 = 1;
let qive = {
    name:"Mac",
    price: 9,
    chip: "M1",
    count: 1,
};

for (let key in qive) {
    if(typeof qive[key] === "number") sum4 *= qive[key];
}

console.log(sum4);