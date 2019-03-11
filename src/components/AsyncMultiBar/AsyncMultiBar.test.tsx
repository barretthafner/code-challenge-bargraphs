import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup, wait, getByTestId, act } from 'react-testing-library';

import { AsyncMultiBarTestProps } from '../../App';
import AsyncMultiBar from './index';
import { SingleBarTestId } from '../SingleBar';

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('renders the correct number of SingleBar elements', () => {
	act(() => {
		const { getAllByTestId } = render(
			<AsyncMultiBar {...AsyncMultiBarTestProps} />
		);

		wait(() => getAllByTestId(SingleBarTestId));
	});
});
