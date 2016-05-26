//These variables are to make the rice production work every time the image is clicked.

var riceCrop = document.getElementById("riceCrop");
var grains = document.getElementById("grains");
var grainCount = 0;

//These 3 variables are for the farmer upgrade

var farmerButton = document.getElementById("farmerButton");
var farmers = document.getElementById("farmers");
var farmerCount = 0;

//These 3 variables are for the fertilizer upgrade

var fertButton = document.getElementById("fertButton");
var fertilizers = document.getElementById("fertilizers");
var fertCount = 0;

//Plow upgrade variables
var plowButton = document.getElementById("plowButton");
var plows = document.getElementById("plows");
var plowCount = 0;

//Oxen upgrade variables
var oxenButton = document.getElementById("oxenButton");
var oxen = document.getElementById("oxen");
var oxenCount = 0;

//Mao upgrade variables
var maoButton = document.getElementById("maoButton");
var mao = document.getElementById("mao");
var maoCount = 0;

//This event listener detects if the riceCrop image is clicked, and adds 1 to the span named grainCount every time it is clicked.

riceCrop.addEventListener("click", function(){
   grainCount++; 
   grains.innerHTML = grainCount;
});

//This event listener listens for the farmer button to be clicked. When it is, it checks if the grainCount is 50 or more.
//If so, 1 is added to the number of farmers, 50 is subtracted from the grain count, and 1 grain is added every 2 seconds for each farmer bought.

farmerButton.addEventListener("click", function(){
   if (grainCount >= 50) {
      farmerCount++;
      farmers.innerHTML = farmerCount;
      grainCount -= 50;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount++;
         grains.innerHTML = grainCount;
      }, 3000);
   } 
});

//This is similar to the event listener above, except for different variables and displays.

fertButton.addEventListener("click", function(){
   if (grainCount >= 1000) {
      fertCount++;
      fertilizers.innerHTML = fertCount;
      grainCount -= 1000;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount += 4;
         grains.innerHTML = grainCount;
      }, 1000);
   }
});

plowButton.addEventListener("click", function(){
   if (grainCount >= 30000) {
      plowCount++;
      plows.innerHTML = plowCount;
      grainCount -= 30000;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount += 50;
         grains.innerHTML = grainCount;
      }, 1000);
   }
});

oxenButton.addEventListener("click", function(){
   if (grainCount >= 500000) {
      oxenCount++;
      oxen.innerHTML = oxenCount;
      grainCount -= 500000;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount += 900;
         grains.innerHTML = grainCount;
      }, 1000);
   }
});

maoButton.addEventListener("click", function(){
   if (grainCount >= 1000000000) {
      maoCount++;
      mao.innerHTML = maoCount;
      grainCount -= 1000000000;
      grains.innerHTML = grainCount;
      setInterval(function(){
         grainCount += 5432125;
         grains.innerHTML = grainCount;
      }, 1000);
   }
});