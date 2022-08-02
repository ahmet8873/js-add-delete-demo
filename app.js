// select buttons

const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

const addKey=document.querySelector("#addkey");
const addValue=document.querySelector("#addvalue");
const deleteKey=document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", delItem);
clear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(addKey.value ,addValue.value);

}

function delItem(e){
    sessionStorage.removeItem(deleteKey.value);
    
}

function clearItem(e){
    sessionStorage.clear();
    
}
