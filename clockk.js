



setInterval(()=>{
    let date=new Date();

let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();

let hrot=30*h+m/2;
let mrot=6*m+s/10;
let srot=6*s;

hour.style.transform=`rotate(${hrot}deg)`;
minute.style.transform=`rotate(${mrot}deg)`;
second.style.transform=`rotate(${srot}deg)`;



},1000);
