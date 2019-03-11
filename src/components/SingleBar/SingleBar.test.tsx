import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';

import SingleBar, {
	LeftPercentageTestId,
	RightPercentageTestId,
} from './index';

import styles from './SingleBar.module.scss';
import { SingleBarTestProps } from '../../App';

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('renders as expected', () => {
	const { container, getByText } = render(
		<SingleBar {...SingleBarTestProps} />
	);
	expect(getByText(SingleBarTestProps.title)).toBeInTheDocument();

	expect(container.querySelector(`.${styles.leftSide}`)).toHaveStyle(
		`background-color: ${SingleBarTestProps.left.color};`
	);

	expect(container.querySelector(`.${styles.rightSide}`)).toHaveStyle(
		`background-color: ${SingleBarTestProps.right.color};`
	);
});

test('math is done properly', () => {
	const { getByTestId } = render(<SingleBar {...SingleBarTestProps} />);

	const { value: leftValue } = SingleBarTestProps.left;
	const { value: rightValue } = SingleBarTestProps.right;

	const totalValue = leftValue + rightValue;
	const leftPercentage = Math.round((leftValue / totalValue) * 100);
	const rightPercentage = Math.round((rightValue / totalValue) * 100);

	expect(getByTestId('totalValue')).toHaveTextContent(totalValue.toString());

	expect(getByTestId(LeftPercentageTestId)).toHaveTextContent(
		leftPercentage.toString()
	);
	expect(getByTestId(RightPercentageTestId)).toHaveTextContent(
		rightPercentage.toString()
	);
});

/**
 * TODO: Implement this test, when supported
 * JSDOM does not support pseudo elements at this time (10 Mar 2019)
 * https://github.com/jsdom/jsdom/issues/1928
 */
// test('sides highlight on hover', () => {});
