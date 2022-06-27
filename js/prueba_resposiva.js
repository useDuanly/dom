const d = document;

export default function resposiveTexter(form) {
  const $form = d.getElementById(form);

  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    /* console.log(e.target);
    console.log(e.target === $form.cerrar); */
    if (e.target === $form.cerrar) tester.close();
  });
}
