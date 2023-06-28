import { enemykeys, keys } from "./eventlisteners.js";
import { player, enemy } from "./js.js";
export function enemymodel() {
  //movement of enemy based on my position only
  if (
    enemykeys.ArrowRight === false &&
    enemy.position.x - player.position.x <= 400
  ) {
    enemykeys.ArrowRight = true;
    setTimeout(() => {
      enemykeys.ArrowRight = false;
    }, 200);
  } else if (
    enemy.position.x - player.position.x < 230 &&
    enemy.position.x - player.position.x >= 250 &&
    enemykeys.ArrowRight === false &&
    enemykeys.ArrowLeft === false
  ) {
    let count = Math.round(Math.random());
    if (count === 0) {
      enemykeys.ArrowRight = true;
      setTimeout(() => {
        enemykeys.ArrowRight = false;
      }, 200);
    } else {
      enemykeys.ArrowLeft = true;
      setTimeout(() => {
        enemykeys.ArrowLeft = false;
      }, 200);
    }
  } else if (
    enemy.position.x - player.position.x < 250 &&
    enemy.position.x - player.position.x >= 200 &&
    enemykeys.ArrowLeft === false
  ) {
    let count2 = Math.floor(1 + 4 * Math.random());
    if (count2 === 1) {
      enemykeys.ArrowLeft = true;
      setTimeout(() => {
        enemykeys.ArrowLeft = false;
      }, 200);
    } else if (count2 === 2 && enemykeys.z === false) {
      enemy.attack();
      enemykeys.z = true;
      setTimeout(() => {
        enemykeys.z = false;
      }, 500);
    } else if (count2 === 3 && enemykeys.z === false) {
      enemy.defend();
      enemykeys.x = true;
      setTimeout(() => {
        enemykeys.x = false;
      }, 200);
    }
  } else if (
    player.velocity.y != 0 &&
    enemy.position.y >= 440 &&
    enemykeys[" "] === false
  ) {
    let count = Math.floor(0 + 100 * Math.random());

    if (count === 0) {
      enemykeys[" "] = true;
      setTimeout(() => {
        enemykeys[" "] = false;
      }, 100);
    }
  }
  // attack& defend
  else if (
    enemy.position.x - player.position.x < 200 &&
    enemy.position.x - player.position.x <= 100 &&
    enemykeys.x === false &&
    enemykeys.z === false &&
    enemykeys.ArrowLeft === false
  ) {
    let count = Math.floor(1 + 5 * Math.random());
    if (count === 1) {
      enemykeys.x = true;
      enemy.attack();
      setTimeout(() => {
        enemykeys.x = false;
      }, 200);
    } else if (count === 2) {
      enemykeys.z = true;
      enemy.attack();
      setTimeout(() => {
        enemykeys.z = false;
      }, 500);
    } else if (count === 3) {
      enemykeys.ArrowLeft = true;
      setTimeout(() => {
        enemykeys.ArrowLeft = false;
      }, 200);
    }
  } else if (
    enemy.position.x - player.position.x < 100 &&
    enemy.position.x - player.position.x >= 0
  ) {
    console.log("i am here 50,-100");
    let count = Math.floor(1 + 4 * Math.random());
    if (count === 1) {
      enemykeys.x = true;
      enemy.attack();
      setTimeout(() => {
        enemykeys.x = false;
      }, 200);
    } else if (count === 2 && enemy.position.y >= 440) {
      enemykeys[" "] = true;
      setTimeout(() => {
        enemykeys[" "] = false;
      }, 100);
    } else {
      enemykeys.ArrowLeft = true;
      setTimeout(() => {
        enemykeys.ArrowLeft = false;
      }, 500);
    }
  } else if (
    enemy.position.x - player.position.x < -100 &&
    enemykeys.x === false &&
    enemykeys.z === false &&
    enemykeys.ArrowLeft === false
  ) {
    enemykeys.ArrowLeft = true;
    setTimeout(() => {
      enemykeys.ArrowLeft = false;
    }, 200);
  }

  // to make game hard we can do enemy movement based on my attack and defend as an argument
}
