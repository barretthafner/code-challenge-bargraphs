import * as React from 'react';
import { ActiveDataProps } from '../components/ActiveData';

/**
 * Typescript definitions
 */
interface State {
	activeData: ActiveDataProps | null;
}

interface Actions {
	updateActiveData: Function;
}

interface Context extends State, Actions {}

/**
 * Set initial state
 */
export const initialState: State = {
	activeData: null,
};

/**
 * Return state actions
 */
export const getActions = (setState: Function): Actions => {
	return {
		updateActiveData: (activeData: ActiveDataProps | null) => {
			setState({ activeData });
		},
	};
};

/**
 * Define context
 */
export const StateContext = React.createContext({
	...initialState,
	updateActiveData: () => {},
} as Context);
