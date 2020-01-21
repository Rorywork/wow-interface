const testingBtn = document.getElementById("testingBtn");
const tradeBtn = document.getElementById("tradeBtn");
const tradeBox = document.getElementById("tradingInterface");
const intro = document.getElementById("intro");
const backPack = document.getElementById("backpack-space");
const snapper = document.getElementsByClassName("snapper");



const tradeItems = document.getElementsByClassName("item");
const newItems = document.getElementsByClassName("itemx");


const ability = document.getElementById("ability");

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
    "images/lane-snapper.PNG",
    false,
    111
  ],
  [
    "Firelord's Robes",
    "fRobes",
    "url('/../dist/images/firelord-robes.PNG')",
    "images/firelord-robes.PNG",
    false,
    60
  ],
  [
    "Demon Stalker Greathelm",
    "dSHelm",
    "url('/../dist/images/demon-stalker-helm.PNG')",
    "images/demon-stalker-helm.PNG",
    false,
    80
  ],
  [
    "Lashtail Hatchling",
    "lHatchling",
    "url('/../dist/images/lashtail-hatchling.PNG')",
    "images/lashtail-hatchling.PNG",
    false,
    25
  ]
];

let herItems = [
  [
    "Lane Snapper",
    "lSnapper",
    "url('/../dist/images/lane-snapper.PNG')",
    "images/lane-snapper.PNG",
    false,
    111
  ],
  [
    "Firelord's Robes",
    "fRobes",
    "url('/../dist/images/firelord-robes.PNG')",
    "images/firelord-robes.PNG",
    false,
    60,
  ],
  [
    "Demon Stalker Greathelm",
    "dSHelm",
    "url('/../dist/images/demon-stalker-helm.PNG')",
    "images/demon-stalker-helm.PNG",
    false,
    80,
  ],
  [
    "Lashtail Hatchling",
    "lHatchling",
    "url('/../dist/images/lashtail-hatchling.PNG')",
    "images/lashtail-hatchling.PNG",
    false,
    25
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
      setTimeout(theTrade, 500);

      break;
    }
  }
}

function theTrade() {
  for (i = 0; i < newItems.length; i++) {
    let stylex = getComputedStyle(newItems[i]);
    if (stylex.backgroundImage === "none") {
      newItems[i].style.backgroundImage =
        herItems[Math.floor(Math.random() * 3 + 1)][2];
      newItems[i].style.backgroundPosition = "center";
      newItems[i].style.backgroundRepeat = "no-repeat";
      newItems[i].style.backgroundSize = "cover";

      break;
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

  for (i = 0; i < newItems.length; i++) {
    let stylex = getComputedStyle(newItems[i]);

    if (stylex.backgroundImage != "none") {
      newItems[i].style.backgroundImage = "none";
    }
  }

  for (i = 0; i < tradeItems.length; i++) {
    tradeItems[i].style.border = "1px solid gold";
  }
}

function offer() {
  console.log("hello offer");

  for (i = 0; i < tradeItems.length; i++) {
    tradeItems[i].style.border = "3px solid blue";
  }
  tradeBtn.style.backgroundColor = "green";
}






function showInfo(item_hover) {
  console.log("Show info working");
  console.log(item_hover);

  for (i = 0; i < myItems.length; i++) {
    let item = myItems[i];

    for (j = 0; j < item.length; j++) {
      if (item[j] === item_hover) {
        console.log("We have a match!");
        console.log(item);


        let elem = document.createElement("img");
        ability.appendChild(elem);
        elem.src = item[3];

        let title = document.createElement("H1");
        ability.appendChild(title);
        title.textContent = item[0];
        title.style.fontSize = "1.2rem";
        title.style.position = "relative";
        title.style.float = "right";
        title.style.right = "50px";
        title.style.top = "20px";

        let level = document.createElement("p");
        ability.appendChild(level);
        level.textContent = "Item Level " + item[5];
        level.style.marginLeft = "100px";
        level.style.color = "gold";
        level.style.position = "relative";
        level.style.float = "right";
        level.style.right = "50px";

      }
    }
  }









}