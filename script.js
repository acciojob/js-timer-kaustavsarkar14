// write js code here if required
const timer = document.getElementById('timer')
const date = new Date()
timer.innerText = date.getDay() +"/"+ date.getMonth()+"/"+date.getFullYear()+","+ date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()