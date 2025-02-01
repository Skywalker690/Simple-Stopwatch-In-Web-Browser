

function clock(){
    

    const time = new Date();

    let hours = time.getHours();
    const mer =hours >=12? "PM":"AM";
    hours = hours % 12 || 12 ;

    hours =hours.toString().padStart(2,0);
    const min =time.getMinutes().toString().padStart(2,0);
    const sec =time.getSeconds().toString().padStart(2,0);

    const timestring =`${hours}:${min}:${sec} ${mer}`
    document.getElementById("clock").textContent =timestring;
}

clock();
setInterval(clock,1000);