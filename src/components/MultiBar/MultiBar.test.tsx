import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';

import { MultiBarTestProps } from '../../App';
import MultiBar from './index';
import { SingleBarTestId } from '../SingleBar';

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('renders the correct number of SingleBar elements', () => {
	const { getAllByTestId } = render(<MultiBar {...MultiBarTestProps} />);
	const elements = getAllByTestId(SingleBarTestId);

	expect(elements.length).toEqual(MultiBarTestProps.values.length);
});
