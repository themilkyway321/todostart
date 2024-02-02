const clock = document.querySelector(".clock span");

// new Date()와  Date.now()차이 알아보기

function getTime(){
    const date = new Date();
    console.dir(date)
    const hours = String(date.getHours()).padStart("2",0);
    const minutes = String(date.getMinutes()).padStart("2",0);
    clock.innerHTML =`${hours}:${minutes}`
  
}

getTime();

setInterval(getTime,60000);
