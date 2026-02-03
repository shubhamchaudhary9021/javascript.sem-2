//
// let arr = [1,2,3,4,5,6] ;
// for (let i=0;i<arr.length;i++)
// {
//     arr[i] = arr[i]+3;
//     console.log(arr[i]);
// }
//


// array methods
//1. map(call back)
// let arr = [1,2,3,4,5];
// let result = arr.map((i)=>i*2)
// console.log(result);
//

//2. filter
// let scores = [12,3,4,24,33,23,15]
// let highscores = scores.filter(scores=>{
//     if(scores >= 15){
//         console.log(scores,"pass")}
//     else{
//         console.log(scores,"fail")}
// })
//

//3.reduce(callback)
let numbers = [1,2,3,4,5];
let sum = numbers.reduce((acc,current) => acc+current,0);
console.log(sum)

// let sum = 0;
// arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     sum = arr[i]+sum
// }
// console.log(sum)