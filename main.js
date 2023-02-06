import './src/styles/sttings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import { PlayerName } from './src/components/PlayerName';
import { BoardGame } from './src/objects/BoardGame';

const $appRoot = document.querySelector('#app');

$appRoot.insertAdjacentHTML('beforeend', `
    ${PlayerName('Player Um')}
    ${PlayerName('Player Dois')}
    ${BoardGame(6)} 
`);
