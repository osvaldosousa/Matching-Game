import './src/styles/sttings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';


import { ScoreBoard } from './src/objects/ScoreBoard';
import { BoardGame } from './src/objects/BoardGame';

const $appRoot = document.querySelector('#app');

$appRoot.insertAdjacentHTML('beforeend', `
    ${ScoreBoard()}
    ${BoardGame(6)} 
`);
