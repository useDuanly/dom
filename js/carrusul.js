const d = document;
export default function Slide(slides, prev, next) {
  const $slides = d.querySelectorAll(slides),
    $prev = d.querySelector(prev),
    $next = d.querySelector(next);
  //console.log($slides);

  let contador = 0;
  function Prev(e) {
    $slides[contador].classList.remove("active");
    //console.log(e.target);
    contador--;
    if (contador < 0) {
      contador = $slides.length - 1;
    }
    $slides[contador].classList.add("active");
  }
  function Next(e) {
    $slides[contador].classList.remove("active");
    //console.log(e.target);
    contador++;
    if (contador >= $slides.length) {
      contador = 0;
    }
    $slides[contador].classList.add("active");
  }
  d.addEventListener("click", (e) => {
    if (e.target === $prev) {
      e.preventDefault();
      setTimeout(() => Prev(), 0 || Math.random() * 10);
    }
    if (e.target === $next) {
      e.preventDefault();
      setTimeout(() => Next(), 0 || Math.random() * 10);
    }
  });
}
