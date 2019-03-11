import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';

import App from './App';
import styles from './App.module.scss';

import { TESTID_SIDE } from './components/SingleBar';
import { TESTID_TOOL_TIP } from './components/ToolTip';

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

	// the condition is b/c of TypeScript
	firstSideComponent && fireEvent.mouseEnter(firstSideComponent);
	await wait(() => {
		expect(getByTestId(TESTID_TOOL_TIP)).toBeInTheDocument();
	});

	firstSideComponent && fireEvent.mouseLeave(firstSideComponent);
	await wait(() => {
		expect(queryByTestId(TESTID_TOOL_TIP)).not.toBeInTheDocument();
	});
});
