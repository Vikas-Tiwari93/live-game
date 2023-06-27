let winneryou = {};
let winnerenemy = {};

//round 2 start
let round2fn = () => {
  round2.style.visibility = "visible";
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);

  if (playerhealth <= 0 && round === 2) {
    timevalchange = timeval;
    round += 1;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    winnerenemy[1] = "Won";

    playerhealth = 80;
    enemyhealth = 80;
  } else if (enemyhealth <= 0 && round === 2) {
    timevalchange = timeval;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    round += 1;

    winneryou[1] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  }

  setTimeout(() => {
    round2.style.transform = "scaleY(0)";
    round2.style.border = "0px";
  }, 2000);
};

//round 3 start
let round3fn = () => {
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);

  round3.style.visibility = "visible";
  if (playerhealth <= 0 && round === 3) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[2] = "Won";

    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  } else if (enemyhealth <= 0 && round === 3) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;

    winneryou[2] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;

    setTimeout(() => {
      round3.style.transform = "scaleY(0)";
      round3.style.border = "0px";
    }, 2000);
  }
};

let end = () => {
  time.innerHTML = 0;
  console.log(playerhealth, enemyhealth);
  if (playerhealth <= 0 && round > 3) {
    winnerenemy[3] = "Won";
  } else if (enemyhealth < 0 && round > 3) {
    winneryou[3] = "Won";
  }
  console.log(winneryou, "and", winnerenemy);
  if (Object.keys(winneryou).length > Object.keys(winnerenemy).length) {
    youwin.append(" ", document.getElementById("warcry").value);
    youwin.style.visibility = "visible";
  } else {
    document.getElementById("gameover").style.visibility = "visible";
  }
};

//times up round
let round2fntime = () => {
  round2.style.visibility = "visible";
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);

  if (round === 2 && playerhealth <= enemyhealth) {
    timevalchange = timeval;
    round += 1;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    winnerenemy[1] = "Won";

    playerhealth = 80;
    enemyhealth = 80;
  } else if (round === 2 && playerhealth > enemyhealth) {
    timevalchange = timeval;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    round += 1;

    winneryou[1] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  }

  setTimeout(() => {
    round2.style.transform = "scaleY(0)";
    round2.style.border = "0px";
  }, 2000);
};

//round 3 start
let round3fntime = () => {
  round2.style.visibility = "visible";
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);
  round3.style.visibility = "visible";

  if (timevalchange <= 1 && playerhealth <= enemyhealth) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[2] = "Won";

    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  } else if (timevalchange <= 1 && playerhealth > enemyhealth) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;

    winneryou[2] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  }
  setTimeout(() => {
    round3.style.transform = "scaleY(0)";
    round3.style.border = "0px";
  }, 2000);
};
let endtime = () => {
  time.innerHTML = 0;
  round += 1;
  if (timevalchange <= 1 && playerhealth <= enemyhealth) {
    winnerenemy[3] = "Won";
  } else if (timevalchange <= 1 && playerhealth > enemyhealth) {
    winneryou[3] = "Won";
  }
  console.log(winneryou, "and", winnerenemy);
  if (Object.keys(winneryou).length > Object.keys(winnerenemy).length) {
    youwin.append(" ", document.getElementById("warcry").value);
    youwin.style.visibility = "visible";
  } else {
    document.getElementById("gameover").style.visibility = "visible";
  }
};
