import React from 'react';
import SingleBar, { Props } from './index';
import 'jest-dom/extend-expect';
import styles from '.SingleBar.module.scss';

import { render, cleanup } from 'react-testing-library';

/**
 * Render Component
 */
const testProps: Props = {
	title: 'Task Complete',
	left: { color: '#007cff', value: 48 },
	right: { color: '#ffe944', value: 240 },
};

const { container, getByText, getByTestId } = render(
	<SingleBar {...testProps} />
);

/**
 * Test props are rendered as expected
 */
test('renders as expected', () => {
	expect(getByText(testProps.title)).toBeInTheDocument();

	expect(container.querySelector(`.${styles.leftBar}`)).toHaveStyle(
		`background-color: ${testProps.left.color};`
	);

	expect(container.querySelector(`.${styles.rightBar}`)).toHaveStyle(
		`background-color: ${testProps.right.color};`
	);
});

/**
 * Test that the math is executed as expected
 */
test('math is done properly', () => {
	const { value: leftValue } = testProps.left;
	const { value: rightValue } = testProps.right;

	const totalValue = leftValue + rightValue;
	const leftPercentage = Math.round((leftValue / totalValue) * 100);
	const rightPercentage = Math.round((rightValue / totalValue) * 100);

	expect(getByTestId('totalValue')).toHaveTextContent(totalValue.toString());

	expect(getByTestId('leftPercentage')).toHaveTextContent(
		leftPercentage.toString()
	);
	expect(getByTestId('rightPercentage')).toHaveTextContent(
		rightPercentage.toString()
	);
});

/**
 * Cleanup
 */
afterAll(cleanup);
