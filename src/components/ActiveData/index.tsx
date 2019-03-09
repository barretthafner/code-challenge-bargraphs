import * as React from 'react';
import { StateContext } from '../../context';

/**
 * ActiveDataProps
 */
export interface ActiveDataProps {
	title: string;
	value: number;
	percentage: number;
	total: number;
	description?: string;
}

/**
 * ActiveData Component
 */
const ActiveData: React.FunctionComponent<ActiveDataProps> = ({
	title,
	value,
	percentage,
	total,
	description,
}) => {
	return (
		<div>
			<div>
				<div>{title}</div>
				<ul>
					{description ? <li>Description: {description}</li> : null}
					<li>Value: {value}</li>
					<li>
						{percentage}% of {total}
					</li>
				</ul>
			</div>
		</div>
	);
};

const ActiveDataContainer: React.FunctionComponent = () => {
	const { activeData } = React.useContext(StateContext);

	return (
		<div>
			{activeData ? <ActiveData {...activeData} /> : <div>No active data</div>}
		</div>
	);
};

export default ActiveDataContainer;
