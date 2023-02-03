import { CardGame } from './src/components/CardGame';
import './src/styles/sttings/colors.css';
import './src/styles/elements/base.css';

const $appRoot = document.querySelector('#app');
const $htmlCardGame = CardGame();

$appRoot.insertAdjacentHTML('beforeend', `
  ${$htmlCardGame}
`);
