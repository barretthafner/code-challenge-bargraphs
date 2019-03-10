import * as React from 'react';

import styles from './SingleBar.module.scss';
import { StateContext } from '../../state';

/**
 * BarSideValues
 */
interface BarSideValues {
	color: string;
	value: number;
	description?: string;
}

/**
 * SingleBarProps
 */
export interface SingleBarProps {
	left: BarSideValues;
	right: BarSideValues;
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
	// calculate total
	const total = left.value + right.value;

	return (
		<figure className={styles.singleBar}>
			<div className={styles.infoContainer}>
				<div>{title}</div>
				<div>
					Total: <span data-testid="totalValue">{total}</span>
				</div>
			</div>
			<div className={styles.barContainer}>
				<Side title={title} total={total} isLeft={true} {...left} />
				<Side title={title} total={total} isLeft={false} {...right} />
			</div>
		</figure>
	);
};

/**
 * SidePros
 */
interface SideProps extends BarSideValues {
	title: string;
	total: number;
	isLeft: boolean;
}

/**
 * Side Helper Component
 */
const Side: React.FunctionComponent<SideProps> = ({
	title,
	total,
	isLeft,
	color,
	value,
	description,
}) => {
	/**
	 * Get state setters
	 */
	const { updateActiveData, updateToolTipPosition } = React.useContext(
		StateContext
	);

	// calculate percentage
	const percentage = Math.round((value / total) * 100);

	/**
	 * Mouse movement event handlers
	 */
	const onMouseEnter = () => {
		updateActiveData({ title, total, value, description, percentage });
	};

	const onMouseLeave = () => {
		updateActiveData(null);
	};

	const onMouseMove = (e: React.MouseEvent) => {
		updateToolTipPosition({ x: e.clientX, y: e.clientY });
	};

	// TODO: Highlight and show tooltip on touch screens

	/**
	 * Render content
	 */
	return (
		<div
			className={isLeft ? styles.leftSide : styles.rightSide}
			style={{
				backgroundColor: color,
				width: isLeft ? percentage + '%' : '',
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}>
			<span className={styles.barValue}>
				<span data-testid={isLeft ? 'leftPercentage' : 'rightPercentage'}>
					{percentage}
				</span>
				%
			</span>
		</div>
	);
};

export default SingleBar;
