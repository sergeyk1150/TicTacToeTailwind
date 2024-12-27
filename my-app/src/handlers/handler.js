import { getIsWinner, checkField } from '../utils/utils';
import { WIN_PATTERNS } from '../constants/win-patterns';
import {
	setCurrentPlayer,
	setIsDraw,
	setIsGameEnded,
	setField,
	setInfo,
} from '../actions';
import { getInfoAboutGame } from '../utils/utils';

export const handler = (currentPlayer, isGameEnded, field, index, isDraw, dispatch) => {
	let newIsDraw = isDraw;
	let newCurrentPlayer;
	currentPlayer === 'X' ? (newCurrentPlayer = '0') : (newCurrentPlayer = 'X');
	if (!isGameEnded) {
		dispatch(setField(currentPlayer, index, field));
	}

	const isWinner = getIsWinner(WIN_PATTERNS, field, currentPlayer);

	dispatch(setIsGameEnded(isWinner));

	if (checkField(field) === true && isWinner === false) {
		dispatch(setIsDraw(true));
		newIsDraw = !isDraw;
	}

	if (!isWinner) {
		dispatch(setCurrentPlayer(newCurrentPlayer));
		dispatch(setInfo(getInfoAboutGame(newIsDraw, isWinner, newCurrentPlayer)));
	} else {
		dispatch(setInfo(getInfoAboutGame(newIsDraw, isWinner, currentPlayer)));
	}
};
