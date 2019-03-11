import * as React from 'react';

import SingleBar, { ISingleBar } from '../SingleBar';

/**
 * IMultiBar
 */
export interface IMultiBar {
	values: ISingleBar[];
}

/**
 * MultiBar Component
 */
const MultiBar: React.FunctionComponent<IMultiBar> = ({ values }) => (
	<>
		{values.map((value, index: number) => (
			<SingleBar key={index} {...value} />
		))}
	</>
);

export default MultiBar;
