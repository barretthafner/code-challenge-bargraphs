import * as React from 'react';
import 'jest-dom/extend-expect';
import { act, render, cleanup, fireEvent, wait } from 'react-testing-library';

import App from './App';
import styles from './App.module.scss';

import { SideTestId } from './components/SingleBar';
import { ToolTipTestId } from './components/ToolTip';

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
act(() => {
	test('tooltip shows and hides on barside hover', async () => {
		const { queryByTestId, getByTestId } = render(<App />);
		const firstSideComponent = queryByTestId(SideTestId);

		// the condition is b/c of TypeScript
		firstSideComponent && fireEvent.mouseEnter(firstSideComponent);
		await wait(() => {
			expect(getByTestId(ToolTipTestId)).toBeInTheDocument();
		});

		firstSideComponent && fireEvent.mouseLeave(firstSideComponent);
		await wait(() => {
			expect(queryByTestId(ToolTipTestId)).not.toBeInTheDocument();
		});
	});
});
