'use strict';

import {
  secretNumberNode, 
  guessInputNode, 
  checkBtnNode, 
  againBtnNode, 
  messageNode, 
  scoreNode, 
  appWrapperNode,
  highScoreNode
} from './querySelectors';

import {
  initialString,
  noNumberString,
  correctString,
  tooHighString,
  tooLowString,
  youLostString
} from './stringConstants';

let winnerNumber = Math.floor(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScoreNumber = Number(highScoreNode.innerText);

const checkGuessedNumber = () => {
  const guessedNumber = Number(guessInputNode.value);

  switch (true) {
    case !guessedNumber :
      messageNode.textContent = noNumberString;
      break;
    case guessedNumber > winnerNumber :
      messageNode.textContent = tooHighString;
      scoreNumber--;
      break;
    case guessedNumber < winnerNumber :
      messageNode.textContent = tooLowString;
      scoreNumber--;
      break;
    case guessedNumber === winnerNumber :
      messageNode.textContent = correctString;
      secretNumberNode.textContent = winnerNumber;
      appWrapperNode.style.backgroundColor = 'MediumSeaGreen';
      secretNumberNode.style.width = '30rem';
      checkBtnNode.disabled = true;
      highScoreNode.textContent = 
        scoreNumber > highScoreNumber 
          ? scoreNumber 
          : highScoreNumber;
      highScoreNumber = scoreNumber;
      break;
  }

  scoreNumber > 0 
    ? scoreNode.textContent = scoreNumber
    : ( messageNode.textContent = youLostString, scoreNode.textContent = 0 );
};

const resetGame = () => {
  scoreNumber = 20;
  winnerNumber = Math.floor(Math.random() * 20) + 1;
  guessInputNode.value = '';
  scoreNode.textContent = scoreNumber;
  messageNode.textContent = initialString;
  secretNumberNode.textContent = '?';
  secretNumberNode.style.width = '15rem';
  appWrapperNode.style.backgroundColor = '#222';
  checkBtnNode.disabled = false;
};

checkBtnNode.addEventListener('click', checkGuessedNumber);
againBtnNode.addEventListener('click', resetGame);