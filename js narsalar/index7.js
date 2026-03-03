// let arr = ["Algoritm" , "oxford", "oxford (Kosonsoy filial)"]

// let sum = 0
// for (ar of arr) {
//     if (typeof ar === "string"){
//         sum += ar.length
//     }
// }
// console.log(sum);

// console.log(arr.join("").length);



// let arr = [1,3.2,5,4,6.3,7,9,1.4,2.9]

// let sum = 0
// for (ar of arr){
//     // if(ar.toString().includes(".")){
//     //    sum += ar
//     // }
//     if (!Number.isInteger(ar)){
//         sum += ar
//     }
// }
// console.log(sum);


let arr = [true, "20", { name:"abduloh"}, false,null,undefined, 3.9,10]

let sum = 0
for(let num of arr){
    if(!isNaN (parseFloat(num))){
        sum+= (parseFloat(num))
    }
}
console.log(sum);

// console.log(arr.join());
