// document.getElementById("myInput").addEventListener("change",()=>{
//     document.getElementById("output").textContent ="Change detected"
// })

// const nameInput=document.getElementById("myInput");
// nameInput.addEventListener("change",()=>{

// })

// const nameInput = document.getElementById("myInput");
// const courseInput=document.getElementById("course");
// const btn=document.getElementById("btn");
// const output=document.getElementById("output");

// const Form=document.getElementById("myForm");
// const nameInput = document.getElementById("myInput");
// const courseInput=document.getElementById("course");
// const output=document.getElementById("output");

// courseInput.addEventListener("change",()=>{
//     console.log(courseInput.value);
//     output.textContent=courseInput.value
// !

Form.addEventListener("submit",(event)=>{

    event.preventDefault();
   


    const name=nameInput.value;
    const course=courseInput.value;
    console.log(name,course);

    output.textContent=name+" "+course;
})