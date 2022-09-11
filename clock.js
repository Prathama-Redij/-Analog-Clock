var hourhand= document.querySelector('.hourhand');
var minhand= document.querySelector('.minhand');
var sechand= document.querySelector('.sechand');

setInterval (() => {
    var time= new Date();
    var hour= time.getHours();
    var min= time.getMinutes();
    var sec= time.getSeconds();


    var hr= hour * 30 + min/2;
    var mr= min * 6;
    var sr= sec * 6;

       hourhand.style.transform =`rotate(${hr}deg)`;
        minhand.style.transform =`rotate(${mr}deg)`;
        sechand.style.transform =`rotate(${sr}deg)`;

}, 1000);
