const d = document;
let x = 0,
  y = 0;

export function teclado(e) {
  /* console.clear();
  console.log(e);
  console.log(e.key);
  console.log(e.code);
  console.log(e.type);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`); */

  if (e.key === "a" && e.altKey) {
    alert("hola amigo mio");
  }

  if (e.key === "c" && e.altKey) {
    confirm("confirmacion");
  }

  if (e.key === "p" && e.altKey) {
    prompt("prompt");
  }
}

export const moverPelota = (e, ball, stage) => {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  /*   console.log(e.key);
  console.log(e.keyCode);
  console.log(limitsBall);
  console.log(limitsStage); */

  //const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
        //console.log("izquierda");
      }
      break;
    case 38:
      if (limitsBall.top - 6 > limitsStage.top) {
        e.preventDefault();
        y--;
        //console.log("arriba");
      }

      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
        //console.log("derecha");
      }

      break;
    case 40:
      if (limitsBall.bottom + 6 < limitsStage.bottom) {
        e.preventDefault();
        y++;
        //console.log("abajo");
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 9}px,${y * 9}px)`;
};
