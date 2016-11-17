var DragonX = 10;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
  DragonX -=15;
 document.getElementById("dragon").setAttribute("x", DragonX)

  }
  else if(e.keyCode == 39){
        DragonX +=15;
 document.getElementById("dragon").setAttribute("x", DragonX)
  }
})

var DragonY = 160;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 38){
    DragonY -=15;
 document.getElementById("dragon").setAttribute("y", DragonY)

  }
  else if(e.keyCode == 40){
        DragonY +=15;
 document.getElementById("dragon").setAttribute("y", DragonY)
  }
})
