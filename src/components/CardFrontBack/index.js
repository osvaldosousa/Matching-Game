import './style.css'
import { CardGame } from '../CardGame'

export function CardFrontBack(icon, altIcon, iconId) {
  return /* html */ `
    <article class="card-flip" data-id="${iconId}">
      <div class="card-front">
        ${CardGame()}
      </div>
      <div class="card-back">
        ${CardGame(icon, altIcon, iconId)}
      </div>
    </article>
  `
}
