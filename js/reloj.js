const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let horaTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      horaTempo = setInterval(() => {
        let hora = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${hora}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(horaTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export const alarm = (sound, btnPlay, btnStop) => {
  let alarmaTempo;
  const $alarm = d.createElement("audio");
  $alarm.setAttribute("src", sound);
  //console.log($alarm);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmaTempo = setTimeout(() => {
        console.log($alarm);
        $alarm.play();
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      d.querySelector(btnPlay).disabled = false;
      clearTimeout(alarmaTempo);
      $alarm.pause();
      $alarm.currentTime;
    }
  });
};
