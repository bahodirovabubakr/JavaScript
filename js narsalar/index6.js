// foreach()
// let arr = ["Olma","uzum","Shaftoli"]


// foreach() -----------------------
// arr.forEach(callBack Function)
// let sum = 0
// arr.forEach((valeu) => {
    //     sum += 0
    // })
    // console.log(sum);
    
    
// Map() ------------------------------

// arr.map(callBack Function)
// let newArr = arr.map((valeu) => {
//     return valeu * valeu
// })
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8,9]
// // [1,4,3,16]
// let newArr = arr.map((valeu,i,a) => {
    //     if (i%2) return  valeu ** 2
    //     return valeu
    // })
    
    // console.log(newArr);
    
    
// let arr = [1,2,3,4,5]

// let newArr = arr.filter((valeu) => valeu % 2)
// console.log(newArr);

let arr = ["Olma","Uzum","Nok"]

let newar = arr.filter((valeu) => (valeu.length >= 4) )
   
console.log(newar)

