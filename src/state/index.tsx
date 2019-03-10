import * as React from 'react';
import { ActiveDataProps } from '../components/ActiveData';

/**
 * Typescript definitions
 */
interface Point {
	x: number;
	y: number;
}

interface State {
	activeData: ActiveDataProps | null;
	toolTipPosition: Point;
}

interface Actions {
	updateActiveData: Function;
	updateToolTipPosition: Function;
}

interface Context extends State, Actions {}

/**
 * Set initial state
 */
export const initialState: State = {
	activeData: null,
	toolTipPosition: {
		x: 0,
		y: 0,
	},
};

/**
 * Return state actions
 */
export const getContext = (state: State, setState: Function): Context => {
	return {
		...state,
		updateActiveData: (activeData: ActiveDataProps | null) => {
			setState({ ...state, activeData });
		},
		updateToolTipPosition: (toolTipPosition: Point) => {
			setState({ ...state, toolTipPosition });
		},
	};
};

/**
 * Define context
 */
export const StateContext = React.createContext({
	...getContext(initialState, () => {}),
});
