"use strict";

let roundNumber = Number(document.querySelector(".round-number").textContent);
let energyUsed = Number(document.querySelector(".energy-p").textContent);
let extraEnergy = Number(document.querySelector(".extra-energy-p").textContent);
let cardsUsed = Number(document.querySelector(".cards-p").textContent);
let extraCards = Number(document.querySelector(".extra-cards-p").textContent);
let energyCount = Number(
  document.querySelector(".energy-count-number").textContent
);
let cardsCount = Number(
  document.querySelector(".cards-count-number").textContent
);
let calculatedEnergy = 0;
let calculatedCards = 0;
//ENERGY USED + BUTTON////////////////////////////////////////////
document
  .querySelector(".plus-energy-button")
  .addEventListener("click", function () {
    if (energyUsed >= 10) {
      console.log("max to use is 10");
    } else {
      energyUsed++;
      document.querySelector(".energy-p").textContent = energyUsed;
    }
  });
//ENERGY USED - BUTTON////////////////////////////////////////////
document
  .querySelector(".minus-energy-button")
  .addEventListener("click", function () {
    if (energyUsed <= 0) {
      console.log("min to use is 0");
    } else {
      energyUsed--;
      document.querySelector(".energy-p").textContent = energyUsed;
    }
  });
//EXTRA ENERGY + BUTTON////////////////////////////////////////////
document
  .querySelector(".plus-extra-energy-button")
  .addEventListener("click", function () {
    extraEnergy++;
    document.querySelector(".extra-energy-p").textContent = extraEnergy;
  });
//EXTRA ENERGY - BUTTON////////////////////////////////////////////
document
  .querySelector(".minus-extra-energy-button")
  .addEventListener("click", function () {
    extraEnergy--;
    document.querySelector(".extra-energy-p").textContent = extraEnergy;
  });

//CARDS USED + BUTTON////////////////////////////////////////////
document
  .querySelector(".plus-cards-button")
  .addEventListener("click", function () {
    if (cardsUsed >= 12) {
      console.log("max to use is 12");
    } else {
      cardsUsed++;
      document.querySelector(".cards-p").textContent = cardsUsed;
    }
  });
//CARDS USED - BUTTON////////////////////////////////////////////
document
  .querySelector(".minus-cards-button")
  .addEventListener("click", function () {
    if (cardsUsed <= 0) {
      console.log("min to use is 0");
    } else {
      cardsUsed--;
      document.querySelector(".cards-p").textContent = cardsUsed;
    }
  });
//EXTRA CARDS + BUTTON////////////////////////////////////////////
document
  .querySelector(".extra-plus-cards-button")
  .addEventListener("click", function () {
    extraCards++;
    document.querySelector(".extra-cards-p").textContent = extraCards;
  });
//EXTRA CARDS - BUTTON////////////////////////////////////////////
document
  .querySelector(".extra-minus-cards-button")
  .addEventListener("click", function () {
    extraCards--;
    document.querySelector(".extra-cards-p").textContent = extraCards;
  });

//RESTART BUTTON //////////////////////////////////////////////////
document
  .querySelector(".restart-button")
  .addEventListener("click", function () {
    roundNumber = 1;
    document.querySelector(".round-number").textContent = roundNumber;
    energyUsed = 0;
    document.querySelector(".energy-p").textContent = energyUsed;
    extraEnergy = 0;
    document.querySelector(".extra-energy-p").textContent = extraEnergy;
    cardsUsed = 0;
    document.querySelector(".cards-p").textContent = cardsUsed;
    extraCards = 0;
    document.querySelector(".extra-cards-p").textContent = extraCards;
    energyCount = 3;
    document.querySelector(".energy-count-number").textContent = energyCount;
    cardsCount = 6;
    document.querySelector(".cards-count-number").textContent = cardsCount;
  });
//NEXT ROUND BUTTON/////////////////////////////////////////////////////////
document
  .querySelector(".next-round-button")
  .addEventListener("click", function () {
    roundNumber++;
    document.querySelector(".round-number").textContent = roundNumber;
    //ENERGY COMPUTING//////////////////////////////////////////////////////
    energyCount = Number(
      document.querySelector(".energy-count-number").textContent
    );
    extraEnergy = Number(document.querySelector(".extra-energy-p").textContent);
    energyUsed = Number(document.querySelector(".energy-p").textContent);
    calculatedEnergy = energyCount - energyUsed + extraEnergy;
    if (calculatedEnergy <= 0) {
      calculatedEnergy = 2;
    } else if (calculatedEnergy >= 9) {
      calculatedEnergy = 10;
    } else {
      calculatedEnergy += 2;
    }
    document.querySelector(".energy-count-number").textContent =
      calculatedEnergy;
    //CARDS COMPUTING///////////////////////////////////////////////////////
    cardsCount = Number(
      document.querySelector(".cards-count-number").textContent
    );
    extraCards = Number(document.querySelector(".extra-cards-p").textContent);
    calculatedCards = cardsCount - cardsUsed + extraCards;
    console.log(calculatedCards);
    if (calculatedCards <= 0) {
      calculatedCards = 3;
    } else if (calculatedCards >= 10) {
      calculatedCards = 12;
    } else {
      calculatedCards += 3;
    }
    document.querySelector(".cards-count-number").textContent = calculatedCards;
    //RESETING VALUES FOR NEXT ROUND////////////////////////////////////////
    energyUsed = 0;
    document.querySelector(".energy-p").textContent = energyUsed;
    extraEnergy = 0;
    document.querySelector(".extra-energy-p").textContent = extraEnergy;
    cardsUsed = 0;
    document.querySelector(".cards-p").textContent = cardsUsed;
    extraCards = 0;
    document.querySelector(".extra-cards-p").textContent = cardsUsed;
  });

//BUY ME A COFFEE WIDGET//////////////////////////////////////
