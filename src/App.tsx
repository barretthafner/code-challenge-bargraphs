import React from 'react';

import styles from './App.module.scss';

import SingleBar from './components/SingleBar';

export default () => (
	<div className={styles.app}>
		<SingleBar
			left={{ color: '#007cff', value: 48 }}
			right={{ color: '#ffe944', value: 272 }}
			title="Tasks Completed"
		/>
	</div>
);
