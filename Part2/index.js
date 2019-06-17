let grabID = document.getElementById("grabId");
let cardStyle = document.getElementById("cardStyle");

function setCard() {
    let card = document.getElementById(grabID.value);
    console.log(card);
    card.style.color = cardStyle.value;
    console.log(card.style.color);
}
