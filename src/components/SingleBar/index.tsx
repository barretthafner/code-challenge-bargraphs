import React from 'react';
import styles from './SingleBar.module.scss';

import { BarValuePropType } from '../types';

export interface Props {
	left: BarValuePropType;
	right: BarValuePropType;
	title: string;
}

const SingleBar: React.FunctionComponent<Props> = ({ left, right, title }) => {
	const { color: leftColor, value: leftValue } = left;
	const { color: rightColor, value: rightValue } = right;

	const totalValue = leftValue + rightValue;
	const leftPercentage = Math.round((leftValue / totalValue) * 100);
	const rightPercentage = Math.round((rightValue / totalValue) * 100);

	return (
		<section className={styles.singleBar}>
			<header className={styles.header}>SingleBar Component</header>
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
		</section>
	);
};

export default SingleBar;
