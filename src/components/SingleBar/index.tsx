import * as React from 'react';

import styles from './SingleBar.module.scss';

/**
 * BarValuePropType
 */
interface BarValuePropType {
	color: string;
	value: number;
	description?: string;
}

/**
 * SingleBarProps
 */
export interface SingleBarProps {
	left: BarValuePropType;
	right: BarValuePropType;
	title: string;
}

/**
 * SingleBar Component
 */
const SingleBar: React.FunctionComponent<SingleBarProps> = ({
	left,
	right,
	title,
}) => {
	const { color: leftColor, value: leftValue } = left;
	const { color: rightColor, value: rightValue } = right;

	const totalValue = leftValue + rightValue;
	const leftPercentage = Math.round((leftValue / totalValue) * 100);
	const rightPercentage = Math.round((rightValue / totalValue) * 100);

	return (
		<figure className={styles.singleBar}>
			<div className={styles.infoContainer}>
				<div>{title}</div>
				<div>
					Total: <span data-testid="totalValue">{totalValue}</span>
				</div>
			</div>
			<div className={styles.barContainer}>
				<div
					className={styles.leftBar}
					style={{
						width: leftPercentage + '%',
						backgroundColor: leftColor,
					}}>
					<span className={styles.barValue}>
						<span data-testid="leftPercentage">{leftPercentage}</span>%
					</span>
				</div>
				<div
					className={styles.rightBar}
					style={{
						backgroundColor: rightColor,
					}}>
					<span className={styles.barValue}>
						<span data-testid="rightPercentage">{rightPercentage}</span>%
					</span>
				</div>
			</div>
		</figure>
	);
};

export default SingleBar;
