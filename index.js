// setInterval(() => {
//   const date = new Date();
//   const hourTime = date.getHours();
//   const minuteTime = date.getMinutes();
//   const secondTime = date.getSeconds();

//   const hourRotation = 30 * hourTime + minuteTime / 2;
//   const minuteRotation = 6 * minuteTime;
//   const secondRotation = 6 * secondTime;

//   hour.style.transform = `rotate(${hourRotation}deg)`;
//   minute.style.transform = `rotate(${minuteRotation}deg)`;
//   second.style.transform = `rotate(${secondRotation}deg)`;
// }, 1000);

setInterval(() => {
  const date = new Date();
  const hourTime = date.getHours();
  const minuteTime = date.getMinutes();

  const hourRotation = 30 * hourTime + minuteTime / 2;

  hour.style.transform = `rotate(${hourRotation}deg)`;
}, 1000);

setTimeout(() => {
  setInterval(() => {
    const date = new Date();
    const minuteTime = date.getMinutes();

    const minuteRotation = 6 * minuteTime;

    minute.style.transform = `rotate(${minuteRotation}deg)`;
  }, 1000);
}, 1500);

setTimeout(() => {
  setInterval(() => {
    const date = new Date();
    const secondTime = date.getSeconds();

    const secondRotation = 6 * secondTime;

    second.style.transform = `rotate(${secondRotation}deg)`;
  }, 1000);
}, 2000);

setTimeout(() => {
  document.getElementById("hour").classList.add("hour");
}, 500);
setTimeout(() => {
  document.getElementById("minute").classList.add("minute");
}, 1000);
setTimeout(() => {
  document.getElementById("second").classList.add("second");
}, 1500);
