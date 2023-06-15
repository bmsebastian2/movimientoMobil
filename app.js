let parrafoBeta = document.getElementsByClassName("beta");
let h1 = document.getElementById("h1");

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
  parrafoBeta[0].innerText = ax + ay + az;
  // console.log(alpha);
  // parrafoBeta[1].innerText = "aplha" + alpha;
  // Do stuff with the new orientation data
}
// }
