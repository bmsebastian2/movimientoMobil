let parrafoX = document.getElementById("x");
let parrafoY = document.getElementById("y");
let parrafoZ = document.getElementById("z");
const wrapper = document.querySelector(".wrapper");
const ticket = document.querySelector(".ticket");
// if (window.DeviceOrientationEvent) {
//   window.addEventListener("deviceorientation", handleOrientation, true);
//   h1.innerText = "suport";
//   function handleOrientation(event) {
//     parrafoBeta[0].innerText = "Beta: " + event.gamma;
//   }
// }

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", handleMotion);

  function handleMotion(event) {
    // const absolute = event.absolute;
    const ax = Math.round(event.accelerationIncludingGravity.x);
    const ay = Math.round(event.accelerationIncludingGravity.y);
    const az = Math.round(event.accelerationIncludingGravity.z);

    parrafoX.innerText = ax;
    parrafoY.innerText = ay;
    parrafoZ.innerText = az;

    const { width, height } = wrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    ticket.style.transition = "none";

    const rotationX = ((ax - halfWidth) / halfWidth) * 10;
    const rotationY = ((ay - halfHeight) / halfHeight) * 10;

    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) `;
    if (ax === 0 && ay === 0) {
      ticket.style.transition = "transform .5s ease-in-out";
      ticket.style.transform = `rotateX(0deg) rotateY(0deg) `;
    }
    // window.addEventListener("mouseleave", () => {
    //   ticket.style.transition = "transform .5s ease-in-out";
    //   ticket.style.transform = `rotateX(0deg) rotateY(0deg) `;
    // });

    // console.log(alpha);
    // parrafoBeta[1].innerText = "aplha" + alpha;
    // Do stuff with the new orientation data
  }
}
