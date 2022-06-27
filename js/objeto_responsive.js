const d = document,
  w = window;
function responsiveMedia(id, mq, mobilContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  breakpoint.addEventListener("change", (e) => {
    if (e.matches) {
      //console.log(e);
      console.log(e.matches);
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobilContent;
    }
    //console.info("MQL", breakpoint, e.matches);
  });
}

export default responsiveMedia;
