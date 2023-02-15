document.querySelector("#submit").addEventListener("click",fatchdata);
function fatchdata(){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let des = document.getElementById("Des").value;
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;
    td1.style.textTransform = "capitalize";
    
    let td2 = document.createElement("td");
    td2.innerHTML = age;

    let td3 = document.createElement("td");
    td3.innerHTML = des;

    let td4 = document.createElement("td");
    td4.innerHTML = "X";
    td4.addEventListener("click", Remover);
    tr.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(tr);
    console.log(tr);
}

function Remover(){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}