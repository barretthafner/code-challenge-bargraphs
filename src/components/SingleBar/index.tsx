import * as React from 'react';

import ToolTip from '../ToolTip';

import styles from './SingleBar.module.scss';
import { StateContext } from '../../context';

/**
 * BarSidePropType
 */
interface BarSidePropType {
	color: string;
	value: number;
	description?: string;
}

/**
 * SingleBarProps
 */
export interface SingleBarProps {
	left: BarSidePropType;
	right: BarSidePropType;
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
interface SideProps extends BarSidePropType {
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
	// calculate percentage
	const percentage = Math.round((value / total) * 100);

	// handle tooltip positioning
	const [toolTipVisibility, setToolTipVisibility] = React.useState(false);
	const [toolTipPosition, setToolTipPosition] = React.useState({ x: 0, y: 0 });

	const { updateActiveData } = React.useContext(StateContext);

	/**
	 * Mouse movement event handlers
	 */
	const onMouseEnter = () => {
		setToolTipVisibility(true);
		updateActiveData({ title, total, value, description, percentage });
	};

	const onMouseLeave = () => {
		setToolTipVisibility(false);
		updateActiveData(null);
	};

	const onMouseMove = (e: React.MouseEvent) => {
		setToolTipPosition({ x: e.clientX, y: e.clientY });
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
			{toolTipVisibility ? (
				<ToolTip
					title={title}
					value={value}
					percentage={percentage}
					total={total}
					description={description}
					{...toolTipPosition}
				/>
			) : null}
		</div>
	);
};

export default SingleBar;
