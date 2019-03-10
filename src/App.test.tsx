import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';

import App from './App';
// import styles from './App.module.scss';

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('renders without crashing', () => {
	const { container } = render(<App />);
	expect(container).toBeInTheDocument();
});
