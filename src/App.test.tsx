import * as React from 'react';
import 'jest-dom/extend-expect';
// import '@react-mock/state';
import { render, cleanup, fireEvent, wait, act } from 'react-testing-library';

import App from './App';
import styles from './App.module.scss';

import { TESTID_SIDE } from './components/SingleBar';
import { TESTID_TOOL_TIP } from './components/ToolTip';
import { TESTID_ASYNC_MULTIBAR } from './components/AsyncMultiBar';

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('app renders without crashing', async () => {
	const { container } = render(<App />);
	expect(container.querySelector(`.${styles.app}`)).toBeInTheDocument();
});

test('tooltip shows and hides on barside hover', async () => {
	const { queryByTestId, getByTestId } = render(<App />);
	const firstSideComponent = queryByTestId(TESTID_SIDE);

	/**
	 * Test showing tooltip
	 */
	// the condition is b/c of TypeScript
	firstSideComponent && fireEvent.mouseEnter(firstSideComponent);
	await wait(() => {
		expect(getByTestId(TESTID_TOOL_TIP)).toBeInTheDocument();
	});

	/**
	 * Test hiding tool tip
	 */
	firstSideComponent && fireEvent.mouseLeave(firstSideComponent);
	await wait(() => {
		expect(queryByTestId(TESTID_TOOL_TIP)).not.toBeInTheDocument();
	});
});
