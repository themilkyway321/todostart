const backgroundImg = document.querySelector(".body-bg");
const container = document.querySelector(".container")

const images =["bg-0.jpg","bg-1.jpg","bg-2.jpg","bg-3.jpg","bg-4.jpg"]

const chosenNum = Math.floor(Math.random()*images.length);
const choseImg = images[chosenNum];

backgroundImg.style.backgroundImage =`url(img/${choseImg})`


function showMeContent(event){
    container.classList.remove("showme");
    
}



backgroundImg.addEventListener("click", showMeContent)