var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

document.getElementById("recargarBtn").addEventListener("click", function() {
    window.location.reload();
  });

document.querySelector(".img1").setAttribute("src","/images/Captura"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "/images/Captura"+randomNumber2+".png");

if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML = "De nuevo!"
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = ("Jugador 2 gana!");
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = ("Jugador 1 gana!");
}
