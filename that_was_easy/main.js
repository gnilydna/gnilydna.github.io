function saythatWasEasy() {
    var thatWasEasy = new Audio("./that_was_easy.mp3");
    thatWasEasy.play();
}
function sayexplosionlargegas() {
    var explosionlargegas = new Audio("./cc0_explosion_large_gas_001 (1).mp3");
    explosionlargegas.play();
}

$("#easy").on("click", saythatWasEasy);
$("#explosion").on("click", sayexplosionlargegas);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.charCode == 32) {
    $("easy").trigger("click");
    }
}

