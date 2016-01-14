var riceCrop = document.getElementById("riceCrop");
var grains = document.getElementById("grains");
var grainCount = 0;
var farmerButton = document.getElementById("farmerButton");
var farmers = document.getElementById("farmers");
var farmerCount = 0;

riceCrop.addEventListener("click", function(){
   grainCount++;
   grains.innerHTML = grainCount;
});

farmerButton.addEventListener("click", function(){
   if (grainCount >= 10) {
      farmerCount++;
      farmers.innerHTML = farmerCount;
      grainCount -= 10;
      grains.innerHTML = grainCount;
      setInterval(function(){grainCount + farmerCount} 1000)
   } 
});

