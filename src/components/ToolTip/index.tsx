import * as React from 'react';
import styles from './ToolTip.module.scss';
import { StateContext } from '../../state';

/**
 * Test ids
 */
export const TESTID_TOOL_TIP = 'toolTip';

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
	x: number;
	y: number;
	title: string;
	value: number;
	percentage: number;
	total: number;
	description?: string;
}

/**
 * ToolTip Component
 */
export const ToolTip: React.FunctionComponent<IToolTip> = ({
	x,
	y,
	title,
	value,
	percentage,
	total,
	description,
}) => {
	return (
		<aside
			data-testid={TESTID_TOOL_TIP}
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
