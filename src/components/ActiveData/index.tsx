import * as React from 'react';
import { StateContext } from '../../state';

import styles from './ActiveData.module.scss';

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
		<div className={styles.contents}>
			<div className={styles.title}>{title}</div>
			<ul className={styles.facts}>
				{description ? <li>Description: {description}</li> : null}
				<li>Value: {value}</li>
				<li>
					{percentage}% of {total}
				</li>
			</ul>
		</div>
	);
};

/**
 * Contaner component to check for appropriate state
 */
const ActiveDataContainer: React.FunctionComponent = () => {
	const { activeData } = React.useContext(StateContext);

	return (
		<div className={styles.container}>
			{activeData ? <ActiveData {...activeData} /> : null}
		</div>
	);
};

export default ActiveDataContainer;
