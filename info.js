var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

item1.addEventListener("click", function(){
    info1.innerHTML = "Some stuff";
});
                       
item2.addEventListener("click", function(){
    info2.innerHTML = "Item 2 other stuff";
});

item3.addEventListener("click", function(){
    info3.innerHTML = "3";
});

item4.addEventListener("click", function(){
    info4.innerHTML = "1";
});