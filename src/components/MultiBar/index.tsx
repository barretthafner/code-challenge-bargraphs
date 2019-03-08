import * as React from 'react';

import SingleBar, { SingleBarProps } from '../SingleBar';

/**
 * PropType definition
 */
export interface MultiBarProps {
	values: SingleBarProps[];
}

/**
 * MulitBar Compoennt
 */
const MultiBar: React.FunctionComponent<MultiBarProps> = ({ values }) => (
	<div>
		{values.map((value, index: number) => (
			<SingleBar key={index} {...value} />
		))}
	</div>
);

export default MultiBar;
