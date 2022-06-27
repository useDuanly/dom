const d = document;
export default function form() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");

    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");

    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      e.preventDefault();
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      const data = {
        input: $input,
        pattern,
      };

      if (data.pattern && data.input !== "") {
        // console.log("input tiene pattern ");
        let regex = new RegExp(data.pattern);
        return !regex.exec(data.input.value)
          ? d.getElementById(data.input.name).classList.add("is-active")
          : d.getElementById(data.input.name).classList.remove("is-active");
      }
      if (!data.pattern) {
        //console.log("input no tiene pattern");
        return data.input.value === ""
          ? d.getElementById(data.input.name).classList.add("is-active")
          : d.getElementById(data.input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target === $form) {
      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/use.d.v.a.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((data) => {
          console.log(data);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${data.message}</p>`;
          $form.reset();
        })
        .catch((err) => {
          let message =
            err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
          $response.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          setTimeout(() => $response.classList.add("none"), 3000);
        });
      /*  setTimeout(() => {
        const TIEMPO_EN_MIL_SEGUNDO = 3000;
        setTimeout(
          () => $response.classList.add("none"),
          TIEMPO_EN_MIL_SEGUNDO
        );
      }, TIEMPO_EN_MIL_SEGUNDO); */
    }
  });
}
