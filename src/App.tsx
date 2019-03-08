import React from 'react';

import styles from './App.module.scss';

import SingleBar from './components/SingleBar';
import MultiBar from './components/MultiBar';

const values = [
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
];

export default () => (
	<main className={styles.app}>
		<section>
			<h2 className={styles.header}>SingleBar Component</h2>
			<SingleBar
				left={{ color: '#007cff', value: 48 }}
				right={{ color: '#ffe944', value: 272 }}
				title="Tasks Completed"
			/>
		</section>
		<section>
			<h2 className={styles.header}>MulitBar Component</h2>
			<MultiBar values={values} />
		</section>
	</main>
);
