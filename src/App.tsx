import * as React from 'react';

import styles from './App.module.scss';

import { initialState, getContext, StateContext } from './state';

import SingleBar, { ISingleBar } from './components/SingleBar';
import MultiBar, { IMultiBar } from './components/MultiBar';
import AsyncMultiBar, { IAsyncMultiBar } from './components/AsyncMultiBar';
import ToolTipContainer from './components/ToolTip';

/**
 * Test props
 */
export const SingleBarTestProps: ISingleBar = {
	title: 'Task Complete',
	left: { color: '#007cff', value: 48 },
	right: { color: '#ffe944', value: 240 },
};

export const MultiBarTestProps: IMultiBar = {
	values: [
		{
			title: 'Data1',
			left: { color: '#007cff', value: 48 },
			right: { color: '#ffe944', value: 240 },
		},
		{
			title: 'Data2',
			left: { color: '#007cff', value: 36 },
			right: { color: '#ffe944', value: 85 },
		},
		{
			title: 'Data3',
			left: { color: '#007cff', value: 79 },
			right: { color: '#ffe944', value: 52 },
		},
	],
};

export const AsyncMultiBarTestProps: IAsyncMultiBar = {
	endpoint:
		'https://gist.githubusercontent.com/gargrave/e2fd3d07d44862a094dabb36137a9187/raw/29f8aef5813e1f67ab12f90617638091561b6b25/mock-api.json',
};

const email = 'barretth@gmail.com';

/**
 * App Component
 */
const App = () => {
	/**
	 * Setup state
	 */
	const [state, setState] = React.useState(initialState);
	const context = getContext(state, setState);

	/**
	 * Render component
	 */
	return (
		<StateContext.Provider value={context}>
			<main className={styles.app}>
				<ToolTipContainer />

				<h1 className={styles.title}>Code Challenge Bargraphs</h1>
				<a className={styles.author} href={`mailto:${email}`}>
					By Barrett Hafner
				</a>

				<section>
					<h2 className={styles.header}>SingleBar Component</h2>
					<SingleBar {...SingleBarTestProps} />
				</section>

				<section>
					<h2 className={styles.header}>MulitBar Component</h2>
					<MultiBar {...MultiBarTestProps} />
				</section>

				<section>
					<h2 className={styles.header}>AsyncMultiBar Component</h2>
					<AsyncMultiBar {...AsyncMultiBarTestProps} />
				</section>
			</main>
		</StateContext.Provider>
	);
};

export default App;
