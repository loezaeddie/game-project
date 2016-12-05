var DragonX = 10;
var DragonY = 250;
var foodEaten = 0;
var timeStart = Date.now()



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



  if (DragonX > TacoX && DragonX < TacoX + 50 && DragonY > TacoY && DragonY < TacoY + 50) {
      console.log("fuego")
      document.getElementById("Taco1").setAttribute("x",NumGen(75, 390));
            document.getElementById("Taco1").setAttribute("y",NumGen(75, 160));
  }

  TacoY = Number(document.getElementById("foodimage").getAttribute("y"))
  TacoX = Number(document.getElementById("foodimage").getAttribute("x"))


  if (DragonX > TacoX && DragonX < TacoX + 50 && DragonY > TacoY && DragonY < TacoY + 50) {
      console.log("fuego")
      document.getElementById("Taco2").setAttribute("x",NumGen(75, 390));
          document.getElementById("Taco2").setAttribute("y",NumGen(75, 160));
  }

  function NumGen(min, max) {
 return Math.floor(Math.random() * (max - min + 1) + min);
}

if(DragonX > TacoX && DragonX < TacoX + 50 && DragonY > TacoY && DragonY < TacoY + 50) {
   foodEaten=foodEaten+1
 document.getElementById("score").textContent = foodEaten;
}


if(foodEaten == 5) {
   document.getElementById("canvas").pauseAnimations()
   var timeStop = Date.now()
   var duration = Math.round((timeStop - timeStart)/1000)+" seconds"
}

})
