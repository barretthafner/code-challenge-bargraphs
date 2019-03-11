import * as React from 'react';

/**
 * Typescript definitions
 */
interface IActiveData {
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

export interface IState {
	activeData: IActiveData | null;
	toolTipPosition: IPoint;
}

export interface IActions {
	updateActiveData: Function;
	updateToolTipPosition: Function;
}

export interface IContext {
	state: IState;
	actions: IActions;
}

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
export const getContext = (state: IState, setState: Function): IContext => {
	return {
		state,
		actions: {
			updateActiveData: (activeData: IActiveData | null) => {
				setState({ ...state, activeData });
			},
			updateToolTipPosition: (toolTipPosition: IPoint) => {
				setState({ ...state, toolTipPosition });
			},
		},
	};
};

/**
 * Define Icontext
 */
export const StateContext = React.createContext({
	...getContext(initialState, () => {}),
});
