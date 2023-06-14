console.log("hola 3");
let parrafoBeta = document.getElementsByClassName("beta");
let h1 = document.getElementById("h1");

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, true);
  h1.innerText = "suport";
}

window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("devicemotion", handleMotion, true);

function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  console.log(alpha);
  parrafoBeta[0].innerText = parrafoBeta[0].innerText + 1;
  // Do stuff with the new orientation data
}

function handleMotion(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  console.log(alpha);
  parrafoBeta[1].innerText = beta;
  // Do stuff with the new orientation data
}
