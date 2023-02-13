import './style.css';

import { ArrowDown } from '../../components/ArrowDown';
import { PlayerName } from '../../components/PlayerName';
import { vsPlayer } from '../../components/VsPlayer';
import { PlayerScore } from '../../components/PlayerScore';

export function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName('Player1')}
      ${PlayerScore()}
      ${vsPlayer()}
      ${PlayerScore(2)}
      ${PlayerName('Player2')}
    </header>
  `
}