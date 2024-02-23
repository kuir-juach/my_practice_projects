let time = document.getElementById("current-time");
let d = new Date();


setInterval(()=>{
let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") +currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") +currentTime.getSeconds();
},1000)