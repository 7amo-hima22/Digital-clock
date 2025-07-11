const clockElement = document.querySelector('.clock');// Select the clock element from the HTML 
function updateClock() {
    const now =new Date();
    let hours=now.getHours();// use let instead of const for hours to allow reassigment
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
        hours=hours %12;
        hours=hours ?hours :12;
    const formatHours= hours<10 ?"0"+hours :hours;
    const formatMinutes=minutes<10 ?"0"+minutes:minutes;
    const formatSeconds=seconds<10 ?"0"+seconds:seconds;
    clockElement.textContent='' + formatHours + ':' + formatMinutes + ':' + formatSeconds +' ' + (hours >=12 ?"PM" :"AM");
}
updateClock(); 
setInterval(updateClock, 1000);
