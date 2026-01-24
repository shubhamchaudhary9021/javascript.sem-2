let sentence = "JavaScript is a versatile language";
console.log(sentence.length)
let words = sentence.split("a");
console.log(words);

//Q1 = count the occurance of "r" in the given string
let str = "refresh your knowledge of javascript";
console.log(str.split("r").length-1);

//learn this

// first class function
function test () {
    console.log("test")
    return function test2(){
        console.log("test2");
        return function test3(){
            console.log("test3");
        }
    }
}
//test()()();
let value = test();
let value2=value();
value2();

// Anonymous function

Map(function(){ 

    console.log("anonymous function")
})

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