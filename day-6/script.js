//let sentence = "JavaScript is a versatile language";
//console.log(sentence.length)
//let words = sentence.split("a");
//console.log(words);

//Q1 = count the occurance of "r" in the given string
//let str = "refresh your knowledge of javascript";
//console.log(str.split("r").length-1);

//learn this

// first class function
//function test () {
    //console.log("test")
    //return function test2(){
      //  console.log("test2");
        //return function test3(){
          //  console.log("test3");
        //}
    //}
//}
//test()()();
//let value = test();
//let value2=value();
//value2();

// Anonymous function

//Map(function(){ 

  //  console.log("anonymous function")
//})

// self invoking function
//(function (){
    //console.log("demo")
//})();
//let a = 10;
//console.log(a)
//function sample2(){
    //demo()
//}
//sample2()

//q1 Closure + parameter change
//function outer(x) {
//return function inner(y) {
//console.log(x + y); };
//}
//let add5 = outer(5); add5(3);

//q2 Higher-Order Function with Condition
function process(arr, fn) { let result = [];
for (let i of arr) {
if (i % 2 === 0) { result.push(fn(i));
} }
return result; }
console.log(
process([1, 2, 3, 4], function (n) {
return n * 10; })
);
//q3 IIFE + Closure
let count = 5;
(function () {
let count = 10; return function () {
console.log(count); };
})()();
// q4 Callback Execution Order
function first(cb) { console.log("First"); cb();
}
function second() { console.log("Second");
} first(second);

//q5 this Inside Regular Function
let user = {
name: "Amit", getName: function () {
console.log(this.name); }
}; user.getName();

//q6
