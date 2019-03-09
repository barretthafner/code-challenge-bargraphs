import * as React from 'react';

import ToolTip from '../ToolTip';

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
				<Bar title={title} total={total} isLeft={true} {...left} />
				<Bar title={title} total={total} isLeft={false} {...right} />
			</div>
		</figure>
	);
};

/**
 * Bar Helper Component
 */
interface BarProps extends BarValuePropType {
	title: string;
	total: number;
	isLeft: boolean;
}

const Bar: React.FunctionComponent<BarProps> = ({
	title,
	total,
	isLeft,
	color,
	value,
	description,
}) => {
	// calculate percentage
	const percentage = Math.round((value / total) * 100);

	let _listener = null;

	const [toolTipVisibility, setToolTipVisibility] = React.useState(false);
	const [toolTipPosition, setToolTipPosition] = React.useState({ x: 0, y: 0 });

	const onMouseEnter = () => {
		setToolTipVisibility(true);
	};

	const onMouseLeave = () => {
		setToolTipVisibility(false);
	};

	const onMouseMove = (e: React.MouseEvent) => {
		setToolTipPosition({ x: e.clientX, y: e.clientY });
	};

	// const onClick = (e: React.MouseEvent) => {
	// 	console.log(e);
	// };

	return (
		<div
			className={isLeft ? styles.leftBar : styles.rightBar}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			// onClick={onClick}
			style={{
				backgroundColor: color,
				width: isLeft ? percentage + '%' : '',
			}}>
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
