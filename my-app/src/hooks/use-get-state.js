import { useState, useEffect } from 'react';
import { store } from '../store';
export const useGetState = () => {
	const [state, setState] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	});
	return state;
};
