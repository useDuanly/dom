const d = document,
  w = window;
function boton_scroll(btn) {
  const $scrollBtn = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    const _scrollTop = d.documentElement.scrollTop;
    const options = {
      scrollX,
      scrollY,
      scrollTop: _scrollTop,
    };
    //console.log(`X: ${options.scrollX}`);
    //console.log(`Y: ${options.scrollY}`);

    if (options.scrollTop >= 600 || _scrollTop >= 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      //console.log(e.target);
      //w.scroll(0, 0);
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        //left: 0,
      });
    }
  });
}
export default boton_scroll;
