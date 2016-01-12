var riceCrop = document.getElementById("riceCrop");
var grains = document.getElementById("grains");
var grainCount = 0;

riceCrop.addEventListener("click", function(){
   grainCount++;
   grains.innerHTML = grainCount;
});