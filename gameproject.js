var DragonX = 10;
var DragonY = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
  DragonX -=15;
 document.getElementById("dragon").setAttribute("x", DragonX)

  }
  else if(e.keyCode == 39){
        DragonX +=15;
 document.getElementById("dragon").setAttribute("x", DragonX)
  }
  if(e.keyCode == 38){
    DragonY -=15;
 document.getElementById("dragon").setAttribute("y", DragonY)

  }
  else if(e.keyCode == 40){
        DragonY +=15;
 document.getElementById("dragon").setAttribute("y", DragonY)
  }



  TacoY = Number(document.getElementById("taco").getAttribute("y"))
  TacoX = Number(document.getElementById("taco").getAttribute("x"))

  TacoY = Number(document.getElementById("foodimage").getAttribute("y"))
  TacoX = Number(document.getElementById("foodimage").getAttribute("x"))

  if (DragonX > TacoX && DragonX < TacoX + 50 && DragonY > TacoY && DragonY < TacoY + 50) {
      console.log("fuego")
  }



})
