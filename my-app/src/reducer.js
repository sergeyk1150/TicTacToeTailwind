import { initialState } from './initial-state';
export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_FIELD': {
			const newField = payload.field;
			newField[payload.index] = payload.currentPlayer;
			return {
				...state,
				field: newField,
			};
		}
		case 'SET_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: payload,
			};
		}
		case 'SET_IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: payload,
			};
		}
		case 'SET_IS_DRAW': {
			return {
				...state,
				isDraw: payload,
			};
		}
		case 'RESET': {
			return {
				...initialState,
				field: ['', '', '', '', '', '', '', '', ''],
			};
		}
		case 'SET_INFO': {
			return {
				...state,
				info: payload,
			};
		}
		case 'SET_GET_INFO': {
			return state;
		}

		default:
			return state;
	}
};
