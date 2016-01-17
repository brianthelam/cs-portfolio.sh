var riceCrop = document.getElementById("riceCrop");
var grains = document.getElementById("grains");
var grainCount = 0;
var farmerButton = document.getElementById("farmerButton");
var farmers = document.getElementById("farmers");
var farmerCount = 0;
var fertButton = document.getElementById("fertButton");
var fertilizers = document.getElementById("fertilizers");
var fertCount = 0;
var gmButton = document.getElementById("gmButton");
var gm = document.getElementById("gm");
var gmCount = 0;

riceCrop.addEventListener("click", function(){
   grainCount++; 
   grains.innerHTML = grainCount;
});

farmerButton.addEventListener("click", function(){
   if (grainCount >= 50) {
      farmerCount++;
      farmers.innerHTML = farmerCount;
      grainCount -= 50;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount++;
         grains.innerHTML = grainCount;
      }, 2000);
   } 
});

fertButton.addEventListener("click", function(){
   if (grainCount >= 1000) {
      fertCount++;
      fertilizers.innerHTML = fertCount;
      grainCount -= 1000;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount += 10;
         grains.innerHTML = grainCount;
      }, 1000);
   }
});

gmButton.addEventListener

