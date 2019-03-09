import * as React from 'react';
import { ActiveBarDataProps } from '../components/ActiveBarData';

/**
 * Typescript definitions
 */
interface State {
	activeData: ActiveBarDataProps | null;
}

interface Actions {
	updateActiveData: Function;
}

interface IStateContext extends State, Actions {}

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
		updateActiveData: (activeData: ActiveBarDataProps | null) => {
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
} as IStateContext);
