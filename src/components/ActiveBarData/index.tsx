import * as React from 'react';
import { StateContext } from '../../context';

/**
 * ActiveBarDataProps
 */
export interface ActiveBarDataProps {
	title: string;
	value: number;
	percentage: number;
	total: number;
	description?: string;
}

/**
 * ActiveBarData Component
 */
const ActiveBarData: React.FunctionComponent<ActiveBarDataProps> = ({
	title,
	value,
	percentage,
	total,
	description,
}) => {
	return (
		<section>
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
		</section>
	);
};

const ActiveBarDataContainer: React.FunctionComponent = () => {
	const { activeData } = React.useContext(StateContext);

	return activeData ? (
		<ActiveBarData {...activeData} />
	) : (
		<div>No active data</div>
	);
};

export default ActiveBarDataContainer;
