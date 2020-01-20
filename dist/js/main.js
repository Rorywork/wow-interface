const testingBtn = document.getElementById("testingBtn");
const tradeBtn = document.getElementById("tradeBtn");
const tradeBox = document.getElementById("tradingInterface");

const intro = document.getElementById("intro");



function openTrade() {
    console.log("Open Trade btn working")
    intro.style.display = "none";
    tradeBox.style.visibility = "visible";

}



function openBag() {
    console.log("bag function working")
}