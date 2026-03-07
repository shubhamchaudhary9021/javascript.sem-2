//callback hell
// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log("4");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// promise is introduced to overcome the disadvantage of callback hell
// 3 states
// 1 pending
// fullfilled
// 3 rejected


//promise consumers
// 1. .then(): when promise resolved it will go to the .then
//2. .catch(): when promise rejected it will go to the .catch()
// const pro = new Promise((resolve,reject)=>{
//         let payment="true";
//         if(payment==="true"){
//             resolve()
//         }
//         else{
//             reject()
//         }

// })

// pro.then(()=>{
//     console.log("Dashboard Access")
// })
// .catch(()=>console.log("Access denied"))
// function pro() {
//     return new Promise((resolve, rejected) => {
//         let payment = "True";
//         if (payment == "True") {
//             resolve("Dashboard Accessed");
//         } else {
//             rejected("Dashboard Access Denied");
//         }
//     })
// }

// pro().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });
// console.log('Start');

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log('End');

// interview question complicated code


// setTimeout(() => {
//     console.log("setTimeout");
// }, 1000);
// function Delay() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Timeout Done");
//             resolve();
//         },1000);
//     });
// }
// function test() {
//     console.log("start");
//     Delay();
//     console.log("after Delay");
// }
// test();
// console.log("End");

// console.log("Start");

// setTimeout(() => {
//     console.log("Timer");
// }, 0);

// Promise.resolve()
// .then(() => {
//     console.log("First");
// })
// .then(() => {
//     console.log("Second");
// });

// console.log('End');

function pro(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(num);
            res()
        }, 1000);
        
    })
}
pro(1)
.then(() => pro(2))
.then(() => pro(3))
.then(() => pro(4))
.then(() => pro(5))