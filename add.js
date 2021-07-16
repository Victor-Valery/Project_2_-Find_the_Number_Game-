const randomNumber = Math.floor(Math.random() * 100 + 1);
/* console.log(randomNumber); */
const guessResult = document.getElementById("result");

var count = 0;

function checkFunction() {
    const guessNumber = document.getElementById("guess").value;
    console.log(guessNumber);

    document.getElementById("guess").value = "";
    count += 1;
    document.querySelector("#span_counter").innerHTML = count;

    if (guessNumber < randomNumber) {

        guessResult.textContent = "Try higher number...";
        guessResult.style.color = "red";
        guessResult.style.fontSize = "32px";

    } else if (guessNumber > randomNumber) {

        guessResult.textContent = "Try lower number...";
        guessResult.style.color = "red";
        guessResult.style.fontSize = "32px";

    } else {

        guessResult.textContent = "Congratulations you guessed right.";
        guessResult.style.color = "green";
        guessResult.style.fontSize = "64px";
        guessResult.style.fontStyle = "Italic";


        document.querySelector("#span_counter").textContent = "0";
    }
}