const testingBtn = document.getElementById("testingBtn");
const tradeBtn = document.getElementById("tradeBtn");
const tradeBox = document.getElementById("tradingInterface");
const intro = document.getElementById("intro");
const backPack = document.getElementById("backpack-space");
const snapper = document.getElementsByClassName("snapper");

const tradeItems = document.getElementsByClassName("item");
const newItems = document.getElementsByClassName("itemx");

const ability = document.getElementById("ability");

const elem = document.createElement("img");
const title = document.createElement("H1");
const level = document.createElement("p");

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
  ],
  [
    "Raw Longjaw Mud Snapper",
    "lMSnapper",
    "url('/../dist/images/longjaw-mud-snapper.PNG')",
    "images/longjaw-mud-snapper.PNG",
    false,
    15
  ],
  [
    "Sword of a Thousand Truths",
    "sTTruths",
    "url('/../dist/images/sword-of-truths.PNG')",
    "images/sword-of-truths.PNG",
    false,
    2
  ],
  [
    "Herod's Shoulder",
    "hShoulder",
    "url('/../dist/images/herods-shoulder.PNG')",
    "images/herods-shoulder.PNG",
    false,
    50
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
  ],
  [
    "Raw Longjaw Mud Snapper",
    "lMSnapper",
    "url('/../dist/images/longjaw-mud-snapper.PNG')",
    "images/longjaw-mud-snapper.PNG",
    false,
    15
  ],
  [
    "Sword of a Thousand Truths",
    "sTTruths",
    "url('/../dist/images/sword-of-truths.PNG')",
    "images/sword-of-truths.PNG",
    false,
    2
  ],
  [
    "Herod's Shoulder",
    "hShoulder",
    "url('/../dist/images/herods-shoulder.PNG')",
    "images/herods-shoulder.PNG",
    false,
    50
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

  for (k = 0; k < tradeItems.length; k++) {
    let style = getComputedStyle(tradeItems[k]);

    if (style.backgroundImage === "none") {
      console.log("success");
      tradeItems[k].style.backgroundImage = url;
      tradeItems[k].style.backgroundPosition = "center";
      tradeItems[k].style.backgroundRepeat = "no-repeat";
      tradeItems[k].style.backgroundSize = "cover";
      setTimeout(theTrade, 500);

      console.log(k);

      break;
    }
  }
  return;
}

function theTrade() {
  let l = 0;

  while (getComputedStyle(newItems[l]).backgroundImage != "none") {
    l++;
  }

  let randNo = Math.floor(Math.random() * 7);
  newItems[l].style.backgroundImage = herItems[randNo][2];
  newItems[l].style.backgroundPosition = "center";
  newItems[l].style.backgroundRepeat = "no-repeat";
  newItems[l].style.backgroundSize = "cover";
  console.log(randNo);
  return;
}

// function theTrade() {
//   for (l = 0; l < newItems.length; l++) {
//     let stylex = getComputedStyle(newItems[l]);
//     if (stylex.backgroundImage === "none") {
//       let randNo = Math.floor(Math.random() * 7);

//       newItems[l].style.backgroundImage = herItems[randNo][2];
//       newItems[l].style.backgroundPosition = "center";
//       newItems[l].style.backgroundRepeat = "no-repeat";
//       newItems[l].style.backgroundSize = "cover";
//       console.log(randNo);
//       break;
//     }
//   }
//   return;
// }

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

function removeInfos() {
  console.log("Working");
  ability.removeChild(elem);
  ability.removeChild(title);
  ability.removeChild(level);
}

// Splits string into two lines for long item names
function stringSplit(string) {
  let new_string = "";
  let words = string.split(" ");

  if (words.length === 3) {
    new_string = words[0] + " " + words[1] + "<br>" + words[2];
    console.log(new_string);
    return new_string;
  } else if (words.length === 4) {
    new_string = words[0] + " " + words[1] + "<br>" + words[2] + " " + words[3];
    return new_string;
  } else if (words.length === 5) {
    new_string =
      words[0] +
      " " +
      words[1] +
      " " +
      words[2] +
      "<br>" +
      words[3] +
      " " +
      words[4];
    return new_string;
  } else {
    console.log(string);
    return string;
  }
}

// Shows the item information at the top of page when hovered over
function showInfo(item_hover) {
  console.log("Show info working");
  console.log(item_hover);

  for (i = 0; i < myItems.length; i++) {
    let item = myItems[i];

    for (j = 0; j < item.length; j++) {
      if (item[j] === item_hover) {
        console.log("We have a match!");
        console.log(item);

        ability.appendChild(elem);
        elem.src = item[3];

        ability.appendChild(title);
        title.innerHTML = stringSplit(item[0]);
        title.style.fontSize = "1.2rem";
        title.style.position = "relative";
        title.style.float = "right";
        title.style.right = "50px";
        title.style.top = "20px";

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
