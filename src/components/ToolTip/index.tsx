import * as React from 'react';
import styles from './ToolTip.module.scss';
import { StateContext } from '../../state';

/**
 * Test ids
 */
export const ToolTipTestId = 'toolTip';

/**
 * Intermediate component to render ToolTip if activeData exists in StateContext
 */
const ToolTipContainer: React.FunctionComponent = () => {
	const {
		state: { activeData, toolTipPosition },
	} = React.useContext(StateContext);

	return activeData ? <ToolTip {...activeData} {...toolTipPosition} /> : null;
};

/**
 * IToolTip
 */
export interface IToolTip {
	title: string;
	value: number;
	percentage: number;
	total: number;
	description?: string;
	x: number;
	y: number;
}

/**
 * ToolTip Component
 */
export const ToolTip: React.FunctionComponent<IToolTip> = ({
	title,
	value,
	percentage,
	total,
	description,
	x,
	y,
}) => {
	return (
		<aside
			data-testid={ToolTipTestId}
			className={styles.toolTip}
			style={{
				left: x,
				top: y,
			}}>
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
		</aside>
	);
};

export default ToolTipContainer;
