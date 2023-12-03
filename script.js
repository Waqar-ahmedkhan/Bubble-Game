let Runtimer = 60;
let score = 0;
let clutter = 0;
let hitNO = 0;
function makeBubble() {
  clutter = "";
  for (let i = 1; i <= 160; i++) {
    let GuessNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${GuessNumber}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function getHit() {
  hitNO = Math.floor(Math.random() * 10);
  document.querySelector("#hitMe").textContent = hitNO;
}

function scoreIncrease() {
  score += 10;
  document.querySelector("#scoreInc").textContent = score;
}

getHit();
makeBubble();
countdownTime();
function countdownTime() {
  let timer = setInterval(() => {
    if (Runtimer > 0) {
      Runtimer--;
    } else {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
    }
    document.querySelector("#countDown").textContent = Runtimer;
  }, 1000);
  document.querySelector("#pbtm").addEventListener("click", (dets) => {
    let clickNum = dets.target.textContent;
    if (clickNum == hitNO) {
      scoreIncrease();
      makeBubble();
      getHit();
    }
  });
}
