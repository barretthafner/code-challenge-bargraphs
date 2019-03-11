import * as React from 'react';
import 'jest-dom/extend-expect';
import {
	// act,
	render,
	cleanup,
	// wait,
	// waitForElement
	// waitForDomChange,
} from 'react-testing-library';

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

test('renders loading first', async () => {
	const { container, getByText, getAllByTestId } = render(
		<AsyncMultiBar {...AsyncMultiBarTestProps} />
	);

	expect(getByText(/Loading/i)).toBeInTheDocument();
});

/**
 * TODO: Figure out how act() works with react testing library
 * https://github.com/threepointone/react-act-examples
 *
 * I might need to refactor how my component calls the api here as a utility library,
 * that way I can call it within my test.
 */

// test('renders the response correctly', async () => {
// 	const { container, getByText, getAllByTestId } = render(
// 		<AsyncMultiBar {...AsyncMultiBarTestProps} />
// 	);

// 	expect(getByText(/Loading/)).toBeInTheDocument();

// 	const elements = await waitForElement(() => getAllByTestId(SingleBarTestId));
// 	console.log(elements.length);
// 	expect(elements.length).toEqual();

// 	// https://testing-library.com/docs/api-async#waitfordomchange
// 	waitForDomChange({ container }).then(mutationsList => {
// 		console.log(mutationsList);
// 	});
// });

// test('renders error on bad request', async () => {
// 	const { container, getByText, getAllByTestId } = render(
// 		<AsyncMultiBar endpoint="http://blahblahbalh.com/test.json" />
// 	);

// 	await wait(() => getByText(/Error/));
// 	expect(getByText(/Error/)).toBeInTheDocument();
// });
