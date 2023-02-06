import { CardGame } from '../CardGame'

export function CardFrontBack() {
  return /* html */ `
    <article class="card-flip">
      ${CardGame()}
      ${CardGame('javascript', 'LOgo')}
    </article>
  `
}