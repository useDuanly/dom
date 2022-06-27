const d = document,
  ls = localStorage;
function tema_oscuro(btn, classDark) {
  const $btn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  //console.log($selectors);

  let sol = "🌞",
    luna = "🌑";

  function LightMode() {
    $selectors.forEach((el) => el.classList.add(classDark));
    $btn.textContent = luna;
    ls.setItem("theme", "light");
  }
  function DarkMode() {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $btn.textContent = sol;
    ls.setItem("theme", "dark");
  }
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      //console.log($btn.textContent);
      if ($btn.textContent === sol) {
        LightMode();
      } else {
        DarkMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    //console.log(ls.getItem("theme"));
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") LightMode();

    if (ls.getItem("theme") === "dark") DarkMode();
  });
}

export default tema_oscuro;
