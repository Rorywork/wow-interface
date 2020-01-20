const testingBtn = document.getElementById("testingBtn");
const tradeBtn = document.getElementById("tradeBtn");
const tradeBox = document.getElementById("tradingInterface");

const intro = document.getElementById("intro");

const backPack = document.getElementById("backpack-space");



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