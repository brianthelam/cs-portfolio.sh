var ballista = document.getElementById("ballistaButton");
var laserSight = document.getElementById("laserSightButton");
var extendedClip = document.getElementById("extendedClipButton");
var pistol = document.getElementById("pistolButton");
var lightweight = document.getElementById("lightweightButton");
var toughness = document.getElementById("toughnessButton");
var fastHands = document.getElementById("fastHandsButton");
var dexterity = document.getElementById("dexterityButton");
var tacInsert = document.getElementById("tacInsertButton");
var info = document.getElementById("info-box");

ballista.addEventListener("click", function(){
    info.innerHTML = "Let's start off with the most essential part of a sniping class, the actual sniper rifle itself. The Ballista is probably the best sniper to use in a class like this for Black Ops 2 for multiple reasons, with its only competition coming from the DSR. First, it is a traditional bolt-action sniper, with a single shot and very high damage. Secondly, it has the lowest ADS (Aim Down Sights) time of all BO2 snipers, so you can quickly scope in for the kill. It has less recoil than the DSR, and a larger magazine size. Ballista mags come standard with 7 bullets, 10 with Extended Clip, while the DSR comes with 5 standard, and increases to 7 with Extended Clip. The Ballista also has the fastest reload time of all BO2 snipers, with or without Fast Mags equipped, which is crucial when you need to get that next magazine in if there is an immediate threat nearby.";
});

laserSight.addEventListener("click", function(){
    info.innerHTML = "The Laser Sight attachment is one of the most important attachments you can have on a quickscoping sniper rifle. The Laser Sight reduces your hipfire spray, which makes hipfiring (shooting without aiming down your sights at all) much more accurate at close ranges. This way, when you find that an enemy is threatening to kill you and is directly in front yof you, you do not have to take that one precious second to scope in. Instead, you can safely and reliable hipfire at him to quickly get rid of him. The Laser Sight doesn't just reduce hipfire though. It also reduces your area of spray when in the midst of scoping in, which means you can scope in less and still reliably make shots connect.";
});

extendedClip.addEventListener("click", function(){
    info.innerHTML = "Extended Clip is another great attachment to have when quickscoping. Even though the Ballista is the fastest reloading sniper rifle in the game, it still takes quite a while, which can mean life or death when you are in a tight situation. As stated in the Ballista information, Extended Clip raises the Ballista's standard 7 clip size to 10. Those 3 extra bullets can be crucial, because you do not want to be wasting time reloading, given how long sniper reloads take, and how outgunned you usually are as a quickscoper facing off against people wielding fully automatic guns.";
});

pistol.addEventListener("click", function(){
    info.innerHTML = "For this class setup, the secondary weapon chosen is the B23R, probably the most popular secondary weapon in use in BO2. The B23R is a 3-round-burst machine pistol, giving it a very fast time to kill, which will save your life when someone gets too close for you to properly shoot them with your Ballista, or there are multiple people ready to kill you. However, the B23R isn't the only secondary you can pick for this class. The KAP-40 is also a great secondary weapon due to its extremely fast fully automatic spray. The reason these two are such good secondaries for a quickscoping class is because they can be quickly switched to, and quickly and efficiently take out anyone when you are in close range danger.";
});

lightweight.addEventListener("click", function(){
    info.innerHTML = "Lightweight is a standard perk used in almost any class because of how generally useful it is. It increases your sprint speed by a small amount, which is useful to you when quickscoping because of how much distance you might have to travel when finding a target.";
});

toughness.addEventListener("click", function(){
    info.innerHTML = "Toughness is another standard perk used in most BO2 classes. What Toughness does is reduce the amount you flinch when you get shot by about 75%. This perk allows you to fire at people more accurately when participating in heated firefights, which is especially important for a quickscoper because your sniper rifle only fires once before you have to rechamber, making each shot you take vital.";
});

fastHands.addEventListener("click", function(){
    info.innerHTML = "Fast Hands is a very important perk to have as a quickscoper that can usually save your life. Although it has a few benefits, the main one you want from it is the ability to swap between weapons quickly. With Fast Hands equipped, the time it takes for you to switch from your Ballista to your B23R is halfed. This reduction in weapon swap time is a life saver when you are in a situation where you can't use your Ballista to quickly kill someone, and you have to switch to your secondary to save yourself. The fraction of a second that this perk saves you can mean the difference.";
});

dexterity.addEventListener("click", function(){
    info.innerHTML = "Dexterity is a must for any quickscoping class because of how useful all of its features are. In summary, dexterity allows you to climb and mount obstacles faster, and reduces the amount of time it takes you to raise your weapon after sprinting. The most important part of this perk is being able to raise your weapon faster. Being able to kill someone quickly is the key to being a good quickscoper, and since you'll usually being running around the map, being able to quickly draw your weapon when an enemy is in your crosshairs is crucial to getting the kill. Being able to maneuver over and around obstacles to get to your best quickscoping spots is also a great bonus that comes along with the perk.";
});

tacInsert.addEventListener("click", function(){
    info.innerHTML = "The Tactical Insertion is an interesting choice of tactical, and is not absolutely necessary, but it does offer a few advantages that are often overlooked. If you choose to use the Tac Insert, you can easily get back into the action right after you die. A Tac Insert allows you to play the game strategically, spawning in where the enemies least expect it, or where they are weakest. However, if you do not want to use the Tac Insert, switching it out for a Tomahawk in the Lethal slot is a fine choice, because it gives you extra short range killing power, and synergizes well with Fast Hands, which allows you to throw faster.";
});