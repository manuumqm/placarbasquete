var scoreA = 0;
var scoreB = 0;


function addScore(quantidade, time) {
    if (time == "A"){
        scoreA += quantidade;

        document.getElementById("pontosa").innerHTML = scoreA;
    }
    if (time == "B"){
        scoreB += quantidade;

        document.getElementById("pontosb").innerHTML = scoreB;
    }

}
console.log(scoreA);
console.log(scoreB);
