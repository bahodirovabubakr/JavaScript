let arr = [];

let obj1 = {
  id: 1,
  ism: "Xojakbar",
  familiya: "Oqilov",
  yosh: 13,
  manzil: "Hamza",
  tel_raqam: "+998 88 622 77 37",
};
let obj2 = {
  id: 2,
  ism: "Abdulloh",
  familiya: "Mamadaliyev",
  yosh: 13,
  manzil: "G'uncha",
  tel_raqam: "+998 77 326 00 18",
};
let obj3 = {
  id: 3,
  ism: "Abdukomil",
  familiya: "Ahmadaliyev",
  yosh: 12,
  manzil: "Lola",
  tel_raqam: "+998 77 190 48 75",
};
let obj4 = {
  id: 4,
  ism: "Abrorbek",
  familiya: "Ibragimov",
  yosh: 15,
  manzil: "Pahlavon",
  tel_raqam: "+998 77 777 55 54",
};
let obj5 = {
  id: 5,
  ism: "Osimtoy",
  familiya: "Nasimov",
  yosh: 14,
  manzil: "Hamza",
  tel_raqam: "+998 77 008 17 67",
};
let obj6 = {
  id: 6,
  ism: "Azizbek",
  familiya: "Kerezov",
  yosh: 14,
  manzil: "Paxtakor",
  tel_raqam: "+998 99 645 82 87",
};

const sss = (data) => {
  arr.push(data);
};

sss(obj1);
sss(obj2);
sss(obj3);
sss(obj4);
sss(obj5);
sss(obj6);

// console.log(arr);

// const read = (data) => {
//    let newa = data.filter((obj) => {
//         if(obj.yosh <= 13){
//             return data
//         }

//     })
//     return newa
// }

// console.log(read(arr));

// const read = (data) => {
//    let newe = data.filter((obj) => obj.manzil === "Hamza")
//         return newe

//         }
// console.log(read(arr));

// const read = (data) => {
//     let newarr = data.sort((a,b) => {
//     return  a.ism.localeCompare(b.ism)
//     })
//     return newarr

// }
// console.log(read(arr));

const update = (data, userid) => {
  let newarr = data.map((obj) => {
    if (obj.id === userid) {
      obj.ism = "Abubakr";
      obj.familiya = "Bahadirov";
      obj.manzil = "Lola";
      obj.tel_raqam = "+998 99 777 77 77";
    }
    return obj;
  });
  return newarr;
};

update(arr, 1);

const delet = (delet, id) => {
  let newa = delet.filter((odam) => odam.id !== id);
  return newa;
};

// data(arr,6);

// const read = (data) => {
//     let newarr = data.sort((a,b) => {
//     return  a.id-b.id
//     })
//     return newarr

// }
// console.log(read(arr));

// const read = (data) => {let newa = data.filter((tel) => tel.tel_raqam === "+998 99")
// return newa
// }

// console.log(read(arr));

const read = (data) => {
  return data.filter((obj) => obj.tel_raqam.startsWith("+998 99"));
};
// console.log(read(arr));

const read2 = (data) => {
  let newa = data.filter((uz) => {
    if (uz.tel_raqam.slice(15) % 2 === 0) {
      return uz;
    }
  });
  return newa
};

// console.log(read2(arr));



const read23 = (data) => {
let newa = data.filter((uz) => (uz.familiya.endsWith("ev")))
return newa
}

console.log(read23(arr));
