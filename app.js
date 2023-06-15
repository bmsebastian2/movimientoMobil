let parrafoX = document.getElementById("x");
let parrafoY = document.getElementById("y");
let parrafoZ = document.getElementById("z");
const wrapper = document.querySelector(".wrapper");
const ticket = document.querySelector(".ticket");

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", handleMotion);

  function handleMotion(event) {
    const ax = Math.round(event.accelerationIncludingGravity.x);
    const ay = Math.round(event.accelerationIncludingGravity.y);

    parrafoX.innerText = ax;
    parrafoY.innerText = ay;

    ticket.style.transition = "none";

    const rotationX = ((ax - halfWidth) / halfWidth) * 30;
    const rotationY = ((ay - halfHeight) / halfHeight) * 30;

    ticket.style.transform = `rotateX(${
      event.accelerationIncludingGravity.x * 5
    }deg) rotateY(${event.accelerationIncludingGravity.y * 5}deg)`;
    if (ax === 0 && ay === 0) {
      ticket.style.transition = "transform .5s ease-in-out";
      ticket.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  }
}
