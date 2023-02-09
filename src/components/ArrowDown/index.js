import './style.css';

export function ArrowDown(currentPlayer = 1) {
  function swapPlayer() {
    console.log("veio")
  };

  return /* html */ `
    <img
      class="arrow-down"
      data-currentplayer="${currentPlayer}"
      src="images/seta.svg" 
      alt="seta para baixo indicando a vez de quem jogar"
    >
  `;
}