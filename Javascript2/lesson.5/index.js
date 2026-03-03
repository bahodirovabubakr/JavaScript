// let num = 2026;
// // num .toString();
// console.log(num.toString().length);

// let str1 = "Men Algoritm Markazi";
// console.log(str1.toUpperCase());

// let str2 = "Men Algoritm Markazi";
// console.log(str2.toUpperCase());

// let s1 = "World";
// let s2 = "Hello";
// console.log(s1.localeCompare(s2));
// console.log("Ba".localeCompare("Bb"));

// let matn = "2 + 5 * 3 - 10";
// console.log(eval(matn));

// console.log("A".charCodeAt());
// console.log(String.fromCharCode(100000000000000));

// console.log(String.fromCharCode(65, 66));

// console.log("😁".charCodeAt());
// console.log("🤣".charCodeAt());
// console.log(String.fromCodePoint(0x1f303));

// let text = String.raw`
//     w adhjsgdfhsgff
//     jfdjshjdhjs
//     `;
// console.log(text);

// console.log("Hello".length);
// console.log("Hello".charAt(0));
// console.log("Hello"[0]);
// console.log("Hello".at(-2));
// console.log("W".charCodeAt());
// console.log("Hello".concat(" ", "World!", " ", "Welcome"));
// console.log("Salom".includes("s"));
// console.log("Hello World!".startsWith("Hi"));
// console.log("Hello World!".endsWith("ld!"));
// let str1 = "men bUgun Algoritmdaman.";
// console.log(str1.search(/u/i));
// console.log("Salom".indexOf("S"));
// console.log("SalomS".lastIndexOf("S"));
// let phone = "998 93 111 22 33";
// console.log(phone.padStart(phone.length + 1, "+"));
// let str2 = "Read more";
// console.log(str2.padEnd(str2.length + 3, "."));
// console.log("Hello va Salom".repeat(5));
// console.log("Hello Eshmat".replace("E", "To"));
// console.log("Olgoritm OI".replaceAll("O", "A"));
// console.log("Men Algoritmda o'qiyman".slice(4, 12));

// ===================

// let str = "Men Algoritm IT markazida tahsil olaman.";
// let a = str.lastIndexOf("n")  

// let b = str.indexOf("n")

// console.log(a - b);

// let str = "A1g0r1tm";

// let s = ""
// let n = ""

// for (let value of str) {
//     if (value !== value.toUpperCase() || value !== value.toLowerCase()) {
//         s +=value
//         } else {
//             n +=value
//         }
//  }

//  console.log(s, n);
 
// let str = "Men Algoritm IT markazida tahsil olaman.";

// let c = 0;


// // console.log(str1.search(/u/i));

// for (let value of str) {
//     if (value.toLowerCase(   ) === "a") {
//         c+=1;
//     } 
    

// }


// console.log(c);

// let str = "Men Algoritm IT markazida tahsil olaman.";

// let str1 = str.slice(4, 12).concat(str.slice(23, 26), str.slice(26))
// console.log(str1);

//homework=============//

let str1 = "Men Algoritm IT markazida tahsil olaman";

let vowels = "aeiouAEIOU";
let firstVowelIndex = -1;
let lastConsonantIndex = -1;

// birinchi unli
for (let i = 0; i < str1.length; i++) {
  if (vowels.includes(str1[i])) {
    firstVowelIndex = i;
    break;
  }
}

console.log(lastConsonantIndex - firstVowelIndex);


let str2 = "A1g0r1t9m8";

let digits = "";
let letters = "";

for (let ch of str2) {
  if (/\d/.test(ch)) {
    digits += ch;
  } else {
    letters += ch;
  }
}

console.log(digits + letters);


