const input = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");


function funcOne(){
if(input.value === ''){
    alert("Enter something to add!");
}
else{
let li = document.createElement("li");
li.innerHTML = input.value;
listContainer.appendChild(li);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);
}
input.value ="";
saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "LI"){
e.target.classList.toggle("check");
saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();