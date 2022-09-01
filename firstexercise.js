
let neaName = prompt("Please enter the Neanderthal name");
let myName = document.querySelector("#myName")


myName.innerHTML = `${neaName ? neaName :"HEY HEY U HAVE TO SAY STH !!! "}`


let setTimeout = document.querySelector("#myClock") ;
setInterval(showTime, 1000);
function showTime () {
let saat = new Date();
document.querySelector("#myClock").innerHTML = saat.toLocaleTimeString();
}








