 // Global variable
 var a = 10;
    console.log(a); //10
// Function demo1
 function demo1 (){
    console.log(a); //10
    var b= 20;
    console.log(b); // 20
    }
    demo1();
    // Regular Function
    function sumRegular(){
    let a=10;
    let b=20;
    console.log(a+b); //30
    }
    sumRegular();
    // arrow function
    const sumArrow=(a,b)=>{
        console.log(a+b);  //15
    }
    sumArrow(5,10)

    // simple Call Back-style  Function 
    function demoReturn(a){
        return a;
    }
    console.log(demoReturn(5)); // 100

    const demo=(a)=>a;

    // arrow function is itself a callback function


    //syncronus function
    function sample(){
        console.log("sample")
    }
    sample()

    function demo(){
        console.log("demo")
    }
    demo()
    //

    // syncronus you cannot move to another task before one is completed , asyncronus you can move to another task before one is completed 


    // asyncronus function
    function sample(callback){
        console.log("sample");
        callback()
    }
    function demo(){
        console.log("demo")
    }
    sample(demo)
    //

    // map
    let numbers = [1,2,3];
    let doubled = numbers.map((x)=>x*2);
    console.log(doubled);
    //