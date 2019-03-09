import * as React from 'react';
import styles from './ToolTip.module.scss';

/**
 * ToolTipProps
 */
export interface ToolTipProps {
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
const ToolTip: React.FunctionComponent<ToolTipProps> = ({
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
			className={styles.toolTip}
			style={{
				top: y,
				left: x,
			}}>
			<div className={styles.contents}>
				<div>{title}</div>
				<div>Value: {value}</div>
				<div>
					{percentage}% of {total}
				</div>
				{description ? <div>Description: {description}</div> : null}
			</div>
		</aside>
	);
};

export default ToolTip;
