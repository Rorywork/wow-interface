const testingBtn = document.getElementById("testingBtn");
const tradeBtn = document.getElementById("tradeBtn");
const tradeBox = document.getElementById("tradingInterface");
const intro = document.getElementById("intro");
const backPack = document.getElementById("backpack-space");

const snapper = document.getElementsByClassName("snapper");


function item(name, level, quantity, value) {
    this.name = name;
    this.level = level;
    this.quantity = quantity;
    this.value = value;
}

laneSnapper = new item("Lane Snapper", 111, 200, 0.6);
firelordsRobes = new item("Firelord's Robes", 108, 1, 17.48);
demonStalkerGreathelm = new item("Demon Stalker Greathelm", 80, 1, 5.32);



function openTrade() {
    console.log("Open Trade btn working")
    intro.style.display = "none";
    tradeBox.style.visibility = "visible";
}

function closeTrade() {
    console.log("Close trade btn working")
    tradeBox.style.visibility = "hidden";
    intro.style.display = "inline";
}

function openBag() {
    console.log("bag function working")

    if (backPack.style.visibility === "visible") {
        backPack.style.visibility = "hidden";
    } else {
        backPack.style.visibility = "visible";
    }
}


function addItem() {
    onsole.log("Working");
    document.getElementById("intro");
}
snapper.onclick = addItem;
const tradeItems = document.getElementsByClassName("item");




function builder() {
    console.log(tradeItems);

    console.log(tradeItems[0]);
    //style = getComputedStyle(tradeItems[0]);
    //console.log(style.backgroundColor);
    // console.log(document.getElementsByClassName("item").style.backgroundColor);

    for (i = 0; i < (tradeItems.length); i++) {
        //console.log(tradeItems[i]);

        //tradeItems[i].style.backgroundColor = "red";

        style = getComputedStyle(tradeItems[i]);
        console.log(style.backgroundColor);

        if (style.backgroundColor === "rgb(37, 37, 37)") {
            console.log("success")
        };
        // console.log(tradeItems[i].style.backgroundColor);


        //tradeItems[i].style.visibility = "hidden";

    }
}


// if div.item.style.background-image === none 