// let getData = function (num1, num2 = 0, num  = 0) {
//     console.log(num1 + num2 + nu3);
    
// }

// getData(1, 2, 3)

// let getData = function (num1, num2 = 0, num3  = 0) {
//     return num1 + num2 + num3
    
// }

// let sum = getData(1, 2, 3)

// console.log(sum);

// =================================

// for (let num = 0; num <= 10; num++) {
//     console.log(num);
// }

// let son = 0;
// while (son <=  10) {
//     console.log(son);
//     son++;
// }

// let son2 = 0;
// do {
//     console.log(son2);
//     son2++;
// } while (son2 <= 10)

// outerloop: for (let i = 1;  i <= 9; i++) {
//     for (let j = 1;  j <= 9; j++) {
//         if (i === 6) break outerloop;
//         console.log(i + "x" + j + "=" + i *j);
//     }
//     console.log("\n");
//     console.log("=========================");
//     console.log("\n");
// }

// let a = +prompt("Son kiriting = "); 
// let b = +prompt("Son kiriting = ");
// let d = +prompt("Son kiriting = ");
// let c = (a * b * d)
// if(90 / 3) {
//     console.log(a, "Alo");
// }

// if(70 / 3) {
//     console.log(b, "Yaxshi");
// }

// if(50 / 3) {
//     console.log(d, "Qoniqarli");
// }

// let getData = function (num1,num2 = 0,num3 =0) {
//     console.log(num1 + num2 + num3)
// }
// getData(1,2,3)
// // 



let baho = parseFloat(prompt("ballarni kiriting"))
let baho2 = parseFloat(prompt("ballarni kiriting"))
let baho3 = parseFloat(prompt("ballarni kiriting"))
let jami = (baho+baho2+baho3)/3
if(jami >90) {
    console.log("alo");
    
}

else if( jami<90 && jami >= 70) {
    console.log("yaxshi");  
}
else if(jami<70 && jami > 50  ) {
    console.log("qoniqarli");  
}
else{
    console.log("qoniqarsiz");
    
}