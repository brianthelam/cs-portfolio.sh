var widgetsItem = document.getElementById("widgetsItem");
var chargersItem = document.getElementById("chargersItem");
var memoryItem = document.getElementById("memoryItem");
var hardwareItem = document.getElementById("hardwareItem");
var widgetsInfo = document.getElementById("widgetsInfo");
var chargersInfo = document.getElementById("chargersInfo");
var memoryInfo = document.getElementById("memoryInfo");
var hardwareInfo = document.getElementById("hardwareInfo");

//Says that when widgetsItem is clicked, display the text I wrote in quotes inside the HTML element with the id of widgetsInfo.

widgetsItem.addEventListener("click", function(){
    widgetsInfo.innerHTML = "A huge advantage Android has against Apple is how customizable their phones are. If there is something you don't like about your Android phone, its customizability provides quick solutions. For example, if you are not satisfied by its default keyboard, then you can easily download a third-party keyboard. With Android phones, you can download widgets that allow you to customize your phone and provide extra functionality. One such widget can be a weather widget that displays the predicted weather for your area.";
});

//Similar to the first event listener, except it displays the text in chargersInfo when chargersItem is clicked.
                       
chargersItem.addEventListener("click", function(){
    chargersInfo.innerHTML = "The convenience of Android phones using micro USB chargers is another great advantage. Micro USB chargers are so universal that if you forgot your charger while hitting the town, chances are that someone will have a micro USB charger. So what does Apple have? They have their own lightning cables, which only work for other Apple devices. They are inconvenient and require you to spend extra money on chargers, especially because of the terrible quality of the chargers.";
});

//Similar to the first event listener, except it displays the text in memoryInfo when memoryItem is clicked.

memoryItem.addEventListener("click", function(){
    memoryInfo.innerHTML = "A large number of Android phones offer expandable memory. If you are ever running low on memory, you can just take off the back casing, and replace your old micro SD card with one that has greater storage. Upgrading from 16 GB to 32 Gb will probably cost you around 10 dollars. What happens when you want more storage on an iPhone? Apple is more than happy to charge you $100 or more for a new phone just to upgrade storage. It's quite obvious which side wins in this situation.";
});

//Similar to the first event listener, except it displays the text in hardwareInfo when hardwareItem is clicked.

hardwareItem.addEventListener("click", function(){
    hardwareInfo.innerHTML = "Finally, we get to the hardware debate. I will be comparing the pervious two main flagship phones from each company, the Samsung Galaxy S5 and the Apple iPhone 6. After a bit of research, one will find that the S5 far surpasses the iPhone 6 in the hardware department. The S5 features a quad-core 2.5 GHz processor and 2 GB of RAM, while the 6 contains only a dual-core 2 GHz processor and 1 GB of RAM. With those specs, the S5 is definitely more powerful. The S5 offers a 5.1 inch screen with 1920 x 1080 screen resolution and 432 ppi. Meanwhile, the 6 only has a 4.7 inch screen with 1334 x 750 screen resolution and 326 ppi. Apple always advertises how superior their iPhone cameras are, but when compared to Android, Apple fans will be very disappointed. The 6's rear camera is 8 MP and is capable of 1080p HD video, while the S5's rear camera is a whopping 16 MP, double the iPhone's, and is capable of 4K HD video. There are a plethora of other hardware advantages the S5 has over the 6, such as superior battery capacity, having a removable battery, and being water resistant.";
});