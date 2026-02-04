const head=document.getElementById("heading");
console.log(head.innerText)//it will onlyshow the visible text
console.log(head.textContent)//it will show allthe text including hidden text
console.log(head.innerHTML)//it will show all the text with its tag/element

//dom modification
// crsate a naew elementand set its content
const newParagraph =document.createElement("p");
newParagraph.textContent= "This is a dynamically created Paragraph."
 
console.log(newParagraph.textContent);

// apend the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

//const con=document.getElementById("container");
//const para = con.querySelector("p");

// remove element
document.querySelector("#container p").remove();

Date()

// Event handle
function handleClick(){
    document.getElementById("output").
    textContent="Button clicked!";
}