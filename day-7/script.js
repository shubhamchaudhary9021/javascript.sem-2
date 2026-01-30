//objective
//let user={
    //fullname:"Shubham",
    //address:{
         //city:"Gurugram",
         //state:"Haryana",

   // },
   // mobileno:123456789,
    //favcolor:["black","white","orange"],
    //demo:function(){
       // return "demo function"
   // }

//}
//console.log(user.fullname,user.mobileno,user.favcolor[1], user.address.state,user.demo());

//console.log("My name is "+user.fullname+". My fav color is "+user.favcolor[0])

//string literal

//console.log(`My name is ${user.fullname} . My fav color is ${user.favcolor[0]} . My address is ${user.address.city}`)

//object method

//object.keys(variable name)

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

const car = {
    make:"mahindra",
    model:"scorpio"
    };


//object.frreze(car); //we cant add a new ket and value pair and we cant change or update the existing value

Object.seal(car); //we cant add a new key and value pair but we can change and update the exsiting value

car.model="fortuner"
car.color="white";
console.log(car);





