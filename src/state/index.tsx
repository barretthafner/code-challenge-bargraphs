import * as React from 'react';

/**
 * Typescript definitions
 */
export interface IActiveData {
	title: string;
	value: number;
	percentage: number;
	total: number;
	description?: string;
}

interface IPoint {
	x: number;
	y: number;
}

interface IState {
	activeData: IActiveData | null;
	toolTipPosition: IPoint;
}

interface IActions {
	updateActiveData: Function;
	updateToolTipPosition: Function;
}

interface Context extends IState, IActions {}

/**
 * Set initial state
 */
export const initialState: IState = {
	activeData: null,
	toolTipPosition: {
		x: 0,
		y: 0,
	},
};

/**
 * Return state Iactions
 */
export const getContext = (state: IState, setState: Function): Context => {
	return {
		...state,
		updateActiveData: (activeData: IActiveData | null) => {
			setState({ ...state, activeData });
		},
		updateToolTipPosition: (toolTipPosition: IPoint) => {
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
