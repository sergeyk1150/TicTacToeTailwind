export const setField = (delta, index, field) => ({
	type: 'SET_FIELD',
	payload: {
		currentPlayer: delta,
		index: index,
		field: field,
	},
});
