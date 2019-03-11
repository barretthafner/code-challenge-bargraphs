import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';

import ToolTipContainer from './index';
import { StateContext } from '../../state';

const testContext = {
	activeData: {
		title: 'Tooltip Test',
		value: 2,
		percentage: 14,
		total: 205,
		description: 'test_tooltip',
	},
	toolTipPosition: {
		x: 15,
		y: 23,
	},
	updateActiveData: () => {},
	updateToolTipPosition: () => {},
};

const { title, value, percentage, total, description } = testContext.activeData;
const { x, y } = testContext.toolTipPosition;

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('renders as expected from context', () => {
	const tree = (
		<StateContext.Provider value={testContext}>
			<ToolTipContainer />
		</StateContext.Provider>
	);
	const { container, getByText } = render(tree);

	// positioning
	expect(container.firstChild).toHaveStyle(`
		left: ${x}px;
		top: ${y}px;
	`);

	// text (this is probably overkill ¯\_(ツ)_/¯)
	expect(getByText(title)).toBeInTheDocument();
	expect(getByText(`Value: ${value}`)).toBeInTheDocument();
	expect(getByText(`${percentage}% of ${total}`)).toBeInTheDocument();
	expect(getByText(`Description: ${description}`)).toBeInTheDocument();
});
