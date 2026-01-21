let str = "javascript is amazing!";
let sub = str.substring(-2, 2);
console.log(sub)

let firstName = "shubham";
let lastName = "chaudhary";
// let fullName = firstName.concat(" ",lastname);
// let fullname = firstName +" " + lastName

// stringliterals
let fullName= `${firstName}: this is my firstName, ${lastName}: my last name`
console.log(fullName);

let university="K.R Mangalam";
let program= "BCA AI/DS";
console.log("My name is shubham and im pursuing"+" "+ program+ " from " +university)

console.log(`my name is shubham and i am pursuing ${program} from $ {}`)



let arr = [1,2,3]
let arr2= [4,5,6]
let newArray =[...arr,...arr2]
console.log(newArray)



