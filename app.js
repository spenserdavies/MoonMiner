let cheese = 0;
let knives = 0;
let miners = 0;
let graters = 0;
let shakers = 0;

let priceMultiplier = 1.1;


let clickModifier = 0;
let passiveCheese = 0;

let clickUpgrades = {
  knife: {
    price: 10,
    quantity: 0,
    clickMod: 1,      //per click
    passiveMod: 0,    //per 1 second
  },
  miner: {
    price: 250,
    quantity: 0,
    clickMod: 1,      //per click
    passiveMod: 1,  //per 1 second
  },
  grater: {
    price: 500,
    quantity: 0,
    clickMod: 2,      //per click
    passiveMod: 3,    //per 1 second
  },
  shaker: {
    price: 1000,
    quantity: 0,
    clickMod: 10,     //per click
    passiveMod: 0     //per 1 second
  }
}


function addKnife(){
  if(cheese >= clickUpgrades.knife.price){
    cheese -= clickUpgrades.knife.price;
    clickModifier += clickUpgrades.knife.clickMod;
    clickUpgrades.knife.quantity ++; //Increases count
    clickUpgrades.knife.price *= priceMultiplier;
  } 
  update();
}

function addMiner(){
  if(cheese >= clickUpgrades.miner.price){
    cheese -= clickUpgrades.miner.price;
    clickModifier += clickUpgrades.miner.clickMod;
    clickUpgrades.miner.quantity ++; //Increases count
    clickUpgrades.miner.price *= priceMultiplier;
  } 
  update();
}

function addGrater(){
  if(cheese >= clickUpgrades.grater.price){
    cheese -= clickUpgrades.grater.price;
    clickModifier += clickUpgrades.grater.clickMod;
    clickUpgrades.grater.quantity ++; //Increases count
    clickUpgrades.grater.price *= priceMultiplier;
  } 
  update();
}

function addShaker(){
  if(cheese >= clickUpgrades.shaker.price){
    cheese -= clickUpgrades.shaker.price;
    clickModifier += clickUpgrades.shaker.clickMod;
    clickUpgrades.shaker.quantity ++; //Increases count
    clickUpgrades.shaker.price *= priceMultiplier;
  } 
  update();
}



function mine(){
  cheese += (1+ clickModifier);
  update();
}



function collectPassive(){
  let passiveTotal = 0;
  passiveTotal += (clickUpgrades.miner.passiveMod * clickUpgrades.miner.quantity);
  passiveTotal += (clickUpgrades.grater.passiveMod * clickUpgrades.grater.quantity);
  passiveCheese = passiveTotal;
  cheese += passiveTotal;
  update()
  return passiveTotal;
}

function startInterval() {
  var collectionInterval = setInterval(collectPassive, 1000);
  // sets the interval of 1000 ms and will repeat the collectPassive() function at every interval
}


function update(){
  let cheeseElem = document.getElementById("cheese-count");
  cheeseElem.innerText = cheese.toFixed(0);
  //NOTE updates cheese count

  let knifeElem = document.getElementById("knife-count");
  knifeElem.innerText = clickUpgrades.knife.quantity.toString();
  let knifeCostElem = document.getElementById("knife-cost");
  knifeCostElem.innerText = clickUpgrades.knife.price.toFixed(0);
  //NOTE updates knife count and cost

  let minerElem = document.getElementById("miner-count");
  minerElem.innerText = clickUpgrades.miner.quantity.toString();
  let minerCostElem = document.getElementById("miner-cost");
  minerCostElem.innerText = clickUpgrades.miner.price.toFixed(0);
  //NOTE updates miner count and cost

  let graterElem = document.getElementById("grater-count");
  graterElem.innerText = clickUpgrades.grater.quantity.toString();
  let graterCostElem = document.getElementById("grater-cost");
  graterCostElem.innerText = clickUpgrades.grater.price.toFixed(0);
  //NOTE updates graterer count

  let shakerElem = document.getElementById("shaker-count");
  shakerElem.innerText = clickUpgrades.shaker.quantity.toString();
  let shakerCostElem = document.getElementById("shaker-cost");
  shakerCostElem.innerText = clickUpgrades.shaker.price.toFixed(0);
  //NOTE updates shaker count

  let modifierElem = document.getElementById("per-click");
  modifierElem.innerText = clickModifier.toString();
  //NOTE updates modifier

  let passiveElem = document.getElementById("per-second");
  passiveElem.innerText = passiveCheese.toString();

}


update();
startInterval();

