let parrafoX = document.getElementById("x");
let parrafoY = document.getElementById("y");
let parrafoZ = document.getElementById("z");

// if (window.DeviceOrientationEvent) {
//   window.addEventListener("deviceorientation", handleOrientation, true);
//   h1.innerText = "suport";
//   function handleOrientation(event) {
//     parrafoBeta[0].innerText = "Beta: " + event.gamma;
//   }
// }

// if (window.DeviceMotionEvent) {
window.addEventListener("devicemotion", handleMotion);

function handleMotion(event) {
  // const absolute = event.absolute;
  const ax = event.accelerationIncludingGravity.x;
  const ay = event.accelerationIncludingGravity.y;
  const az = event.accelerationIncludingGravity.z;
  parrafoX.innerText = Math.round(ax);
  parrafoY.innerText = Math.round(ay);
  parrafoZ.innerText = Math.round(az);

  // console.log(alpha);
  // parrafoBeta[1].innerText = "aplha" + alpha;
  // Do stuff with the new orientation data
}
// }
