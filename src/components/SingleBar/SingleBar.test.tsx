import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, fireEvent } from 'react-testing-library';

import SingleBar, {
	SingleBarProps,
	TEST_ID_LEFT_PERCENTAGE,
	TEST_ID_RIGHT_PERCENTAGE,
} from './index';
import styles from './SingleBar.module.scss';

/**
 * Render Component
 */
const testProps: SingleBarProps = {
	title: 'Task Complete',
	left: { color: '#007cff', value: 48 },
	right: { color: '#ffe944', value: 240 },
};

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('renders as expected', () => {
	const { container, getByText } = render(<SingleBar {...testProps} />);
	expect(getByText(testProps.title)).toBeInTheDocument();

	expect(container.querySelector(`.${styles.leftSide}`)).toHaveStyle(
		`background-color: ${testProps.left.color};`
	);

	expect(container.querySelector(`.${styles.rightSide}`)).toHaveStyle(
		`background-color: ${testProps.right.color};`
	);
});

test('math is done properly', () => {
	const { getByTestId } = render(<SingleBar {...testProps} />);

	const { value: leftValue } = testProps.left;
	const { value: rightValue } = testProps.right;

	const totalValue = leftValue + rightValue;
	const leftPercentage = Math.round((leftValue / totalValue) * 100);
	const rightPercentage = Math.round((rightValue / totalValue) * 100);

	expect(getByTestId('totalValue')).toHaveTextContent(totalValue.toString());

	expect(getByTestId(TEST_ID_LEFT_PERCENTAGE)).toHaveTextContent(
		leftPercentage.toString()
	);
	expect(getByTestId(TEST_ID_RIGHT_PERCENTAGE)).toHaveTextContent(
		rightPercentage.toString()
	);
});

/**
 * TODO: Implement this test, when supported
 * JSDOM does not support pseudo elements at this time (10 Mar 2019)
 * https://github.com/jsdom/jsdom/issues/1928
 */
// test('sides highlight on hover', () => {});
