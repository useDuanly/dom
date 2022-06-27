const d = document;
export default function sorteoDigital(btn, selector, res) {
  const $player = d.querySelectorAll(selector),
    $res = d.getElementById(res);

  const getWinner = (selector) => {
    const $player = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $player.length),
      winner = $player[random];
    //console.log(random, winner, $player);

    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      //console.log(e);
      let temporisador = setTimeout(() => {
        let result = getWinner(selector);
        $res.textContent = result;
        //console.log(result);
      }, Math.random() * 0);
    }
  });

  /*   const getWinnerComment = (selector) => {
    const $player = document.querySelectorAll(selector),
      random = Math.floor(Math.random() * $player.length),
      winner = $player[random];
    console.log(random, winner, $player);

    return `El ganador es: ${winner.textContent}`;
  }; */
  //getWinnerComment("ytd-comment-thread-renderer #author-text span");
}
