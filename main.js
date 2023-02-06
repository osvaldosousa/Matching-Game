import './src/styles/sttings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import { BoardGame } from './src/objects/BoardGame';
import { ScoreBoard } from './src/objects/ScoreBoard';

const $appRoot = document.querySelector('#app');

$appRoot.insertAdjacentHTML('beforeend', `
    ${ScoreBoard()}
    ${BoardGame(6)} 
`);
