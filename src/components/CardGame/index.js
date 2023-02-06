import './style.css'

export function CardGame(icon = 'logo-alura', alt = 'logo alura em pixel art') {
  return /*html*/ `
    <div class="card-game" >
      <img src="images/${icon}.svg" alt="${alt}">
    </div>
  `;
};
