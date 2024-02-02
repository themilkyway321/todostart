const nameForm = document.querySelector("#name-form");
const inputName = document.querySelector("#user-name");
const nameText = document.querySelector(".welcome-text");


function onNameSubmit(event){
    event.preventDefault();
    const nameValue = inputName.value;
    localStorage.setItem("name", nameValue);
    showName(nameValue);
}

function showName(realName){
    nameText.innerHTML = `Welcome! ${realName}`;
    nameText.classList.remove("hidden");
    nameForm.classList.add("hidden");
}

const realName = localStorage.getItem("name");

if (realName === null){
    nameForm.addEventListener("submit", onNameSubmit);
}else{
    showName(realName)
}




