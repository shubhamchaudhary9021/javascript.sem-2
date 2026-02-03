//push function
let fruits = ["apple", "banana"];
let newLength = fruits.push("cherry"); // 3
console.log(newLength)
console.log(fruits)
//

//pop function 
removed=fruits.pop();
console.log(removed)
console.log(fruits)
//

// shift function
shifted=fruits.shift();
console.log(shifted)
console.log(fruits)
//

// unshift function
newl=fruits.unshift("apple");
console.log(newl)
console.log(fruits)
//

//answer 1
// arr = [1,2,3,4]
// len = arr.length;
// arr1 = []
// for(let i=0;i<len;i++)
// while(arr.length>0)
// {
//     // re = arr.pop();
//     arr1.push(arr.pop());
// }
// console.log(arr1)

//answer 2
// let arr = [1,2,3,-3,43,-43,-12]
// let arr1 = []
// let rem =0
// while(arr.length>0){
//     rem = arr.pop();
//     if(rem > - 1)
//     {
//      arr1.push(rem);
//     }
// }
// console.log(arr1)


//answer 3
// let arr=[1,2,3,3,2,1]
// let arr1 = []
// for(let i = arr.length-1; i>=0 ; i--){
//     arr1.push(arr[i])
// }
// console.log(arr1)
// // if (arr == arr1){
// //     console.log("array is pallendrome")
// // }
// // else{
// //     console.log("array is not pallendrome")
// // }
// let f = 1
// for(i=0;i<arr.length;i++)
// {
//     if (arr[i] != arr1[i])
//     {
//         f--
//     }
// }
// if (f)
// {
//     console.log("array is pallendrome")
// }
// else{
//     console.log("array is not pallendrome")
// }

//answer 3 altenative
// function pallendrome(){
//     let arr=[1,2,3,3,2,1]
//     let arr1 = []
//     let temp = []
//     temp = arr
//     while(arr.length>0){
//     rem=arr.pop()
//     arr1.push(rem);
//     }
//     console.log(arr1)
//     for(let i =0 ;i<temp.length;i++){
//         if (temp[i] != arr1[i]){
//             return "not pallenrome"
//         }
//     }
//     return "pallendrome"
// }
// console.log(pallendrome())


// answer 4
// let arr = [1,2,3,4,5,6,7,8]
// let odd = []
// let even = []
// while(arr.length>0){
//     let rem=arr.pop();
//     if (rem % 2 ==0){
//         even.push(rem);
//     }
//     else if (rem%2 ==1){
//         odd.push(rem);
//     }
// }
// console.log("odd numbers are ",odd)
// console.log("even numbers are ",even)
//

// answer 5
let arr=[1,2,3,0,4,5,23,0,0,0,12]
let arr1=[]
let zcount = 0
while(arr.length>0){
    let rem = arr.pop();
    if (rem == 0){
        zcount ++;
    } 
    else{
        arr1.push(rem);
    }
}
for(let i =0;i<zcount;i++){
    arr1.push(0);
}
console.log(arr1)