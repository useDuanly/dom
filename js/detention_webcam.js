const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);
  const container = {
    audio: false,
    video: { facingMode: "user" },
  };

  n.mediaDevices
    .getUserMedia(container)
    .then((strean) => {
      console.log(strean);
      $video.srcObject = strean;
      $video.play();
    })
    .catch((err) => {
      $video.insertAdjacentHTML(
        "afterend",
        ` <p>
          <mark>${err}</mark>
        </p>`
      );
      console.log(`!Sucedio el siguiente error¿ ${err}`);
      console.log($video);
    });
}
