const d = document,
  w = window;
export default function smallVideo() {
  const $video = d.querySelectorAll("video[data-smart-video]");
  //console.log($video);
  const cb = (entries) => {
    //console.log(entries);

    entries.forEach((entry) => {
      //console.log("entry", entry);
      if (entry.isIntersecting) {
        //console.log(entry.target);
        entry.target.play();
      } else {
        //console.log(entry.target);
        entry.target.pause();
      }
      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5,
  });
  //console.log(observer);

  $video.forEach((video) => observer.observe(video));
}
