const testingBtn = document.getElementById("testingBtn");
const tradeBtn = document.getElementById("tradeBtn");
const tradeBox = document.getElementById("tradingInterface");
const intro = document.getElementById("intro");
const backPack = document.getElementById("backpack-space");
const snapper = document.getElementsByClassName("snapper");

const tradeItems = document.getElementsByClassName("item");

// Items that can be traded

// function Item(name, id, level, quantity, value, image, clicked) {
//   this.name = name;
//   this.id = id;
//   this.level = level;
//   this.quantity = quantity;
//   this.value = value;
//   this.image = image;
//   this.clicked = clicked;
// }

// let laneSnapper = new Item(
//   "Lane Snapper",
//   "lSnapper",
//   111,
//   200,
//   0.6,
//   "url('/../dist/images/lane-snapper.PNG')",
//   false
// );
// let firelordsRobes = new Item(
//   "Firelord's Robes",
//   "fRobes",
//   2,
//   108,
//   1,
//   17.48,
//   "url('/../dist/images/firelord-robes.PNG')",
//   false
// );
// let demonStalkerGreathelm = new Item(
//   "Demon Stalker Greathelm",
//   "dSHelm",
//   80,
//   1,
//   5.32,
//   "url('/../dist/images/demon-stalker-helm.PNG')",
//   false
// );

let myItems = [
  [
    "Lane Snapper",
    "lSnapper",
    "url('/../dist/images/lane-snapper.PNG')",
    false
  ],
  [
    "Firelord's Robes",
    "fRobes",
    "url('/../dist/images/firelord-robes.PNG')",
    false
  ],
  [
    "Demon Stalker Greathelm",
    "dSHelm",
    "url('/../dist/images/demon-stalker-helm.PNG')",
    false
  ]
];

function openTrade() {
  console.log("Open Trade btn working");
  intro.style.display = "none";
  tradeBox.style.visibility = "visible";
}

function closeTrade() {
  console.log("Close trade btn working");
  tradeBox.style.visibility = "hidden";
  intro.style.display = "inline";
}

function openBag() {
  console.log("bag function working");

  if (backPack.style.visibility === "visible") {
    backPack.style.visibility = "hidden";
  } else {
    backPack.style.visibility = "visible";
  }
}

function clickItem(item_clicked) {
  console.log(item_clicked);

  for (i = 0; i < myItems.length; i++) {
    let item = myItems[i];

    for (j = 0; j < item.length; j++) {
      if (item[j] === item_clicked) {
        console.log("We have a match!");
        console.log(item);
        let url = item[2];
        console.log(url);
        placeItem(url);
      }
    }
  }
}

function placeItem(url) {
  console.log("Working");
  console.log(tradeItems);

  for (i = 0; i < tradeItems.length; i++) {
    let style = getComputedStyle(tradeItems[i]);

    if (style.backgroundImage === "none") {
      console.log("success");
      tradeItems[i].style.backgroundImage = url;
      tradeItems[i].style.backgroundPosition = "center";
      tradeItems[i].style.backgroundRepeat = "no-repeat";
      tradeItems[i].style.backgroundSize = "cover";
    }
  }
}

function clearTrade() {
  for (i = 0; i < tradeItems.length; i++) {
    let style = getComputedStyle(tradeItems[i]);

    if (style.backgroundImage != "none") {
      tradeItems[i].style.backgroundImage = "none";
    }
  }
}

// function builder() {
//   console.log(tradeItems);
//   console.log(tradeItems[0]);

//   for (i = 0; i < tradeItems.length; i++) {
//     style = getComputedStyle(tradeItems[i]);

//     if (style.backgroundImage === "none") {
//       console.log("success");
//       tradeItems[i].style.backgroundImage =
//         "url('/../dist/images/lane-snapper.PNG')";
//       tradeItems[i].style.backgroundPosition = "center";
//       tradeItems[i].style.backgroundRepeat = "no-repeat";
//       tradeItems[i].style.backgroundSize = "cover";
//     }

//     break;
//   }
// }
