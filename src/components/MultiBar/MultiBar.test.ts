import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';

import MultiBar from './index';
import styles from './App.module.scss';

/**
 * Cleanup
 */
afterEach(cleanup);

/**
 * Tests
 */
test('app renders without crashing', () => {});
