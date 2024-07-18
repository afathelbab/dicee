var result = document.querySelector(".container h1");
var firstImage = document.querySelector(".img1");
var secondImage = document.querySelector(".img2");

window.onload = headToHead();

function headToHead() {

    let playerOneResult = firstPlayerDice();
    let playerTwoResult = secondPlayerDice();

    if (playerOneResult > playerTwoResult) {
      result.textContent = "Player 1 Wins.";
      firstImage.attributes['src'].value = "assets/img/dice"+playerOneResult+".png";
      secondImage.attributes['src'].value = "assets/img/dice"+playerTwoResult+".png";
    } else if (playerOneResult < playerTwoResult) {
      result.textContent = "Player 2 Wins.";
      firstImage.attributes['src'].value = "assets/img/dice"+playerOneResult+".png";
      secondImage.attributes['src'].value = "assets/img/dice"+playerTwoResult+".png";
    } else {
      result.textContent = "Draw.";
      firstImage.attributes['src'].value = "assets/img/dice"+playerOneResult+".png";
      secondImage.attributes['src'].value = "assets/img/dice"+playerTwoResult+".png";
    }

    return [playerOneResult, playerTwoResult, result];
  }
  
  function firstPlayerDice() {
    let firstPlayerResult = randomDiceRoll();
    return firstPlayerResult;
  }
  
  function secondPlayerDice() {
    let secondPlayerResult = randomDiceRoll();
    return secondPlayerResult;
  }
  
  function randomDiceRoll() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
  }