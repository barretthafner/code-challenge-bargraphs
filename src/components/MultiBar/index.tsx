import * as React from 'react';

import SingleBar, { SingleBarProps } from '../SingleBar';

/**
 * MultiBarProps
 */
export interface MultiBarProps {
	values: SingleBarProps[];
}

/**
 * MultiBar Component
 */
const MultiBar: React.FunctionComponent<MultiBarProps> = ({ values }) => (
	<div>
		{values.map((value, index: number) => (
			<SingleBar key={index} {...value} />
		))}
	</div>
);

export default MultiBar;
