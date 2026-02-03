// const query = document.querySelector("#content p");
// console.log(query,"query");

// query.textContent="jidh sdo sof oos fojofj"

// // querySelctorALL
// const query2= document.querySelectorAll("p");
// console.log(query2,"query");

// for(let i=0;i<query2.length;i++){
//     query2[i].textContent="ojwk kdn d owknwkajs"
// }
const para = document.querySelectorAll("p");
for(let i=0;i<para.length;i++){
    if((i+ 1)%2===0){
    para[i].style.color="blue"
    } else{
        para[i].style.color="green"
    }
}
