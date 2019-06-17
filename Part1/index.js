console.log('connection made');

const gameProgress = [];

function play(clickedId) {

    let player = document.getElementById("player");
    let box = document.getElementById(clickedId);

    if (player.innerHTML == "X") {
        player.innerHTML = "O";
        box.innerText = "X";
        gameProgress[clickedId] = "X";
    }
    else if (player.innerHTML == "O") {
        player.innerHTML = "X";
        box.innerText = "O";
        gameProgress[clickedId] = "O";
    }
    
    const topLeft = gameProgress[0];
    const topMid = gameProgress[1];
    const topRight = gameProgress[2];
    const midLeft = gameProgress[3];
    const midMid = gameProgress[4];
    const midRight = gameProgress[5];
    const botLeft = gameProgress[6];
    const botMid = gameProgress[7];
    const botRight = gameProgress[8];

    if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
        alert("We have a winner!: " + topLeft)
    }
    if (midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
        alert("We have a winner!: " + midLeft)
    }
    if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
        alert("We have a winner!: " + botLeft)
    }
    if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
        alert("We have a winner!: " + topLeft)
    }
    if (topMid !== undefined && topMid === midMid && topMid === botMid) {
        alert("We have a winner!: " + topMid)
    }
    if (topRight !== undefined && topRight === midRight && topRight === botMRight) {
        alert("We have a winner!: " + topRight)
    }
    if (midMid !== undefined && midMid === topLeft && midMid === botRight) {
        alert("We have a winner!: " + midMid)
    }
    if (midMid !== undefined && midMid === botLeft && midMid === topRight) {
        alert("We have a winner!: " + midMid)
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
      if (gameProgress[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert("CAT's GAME!");
    }


    console.log('Player: ',player);
    console.log('box: ', box);
    console.log(gameProgress);
}
