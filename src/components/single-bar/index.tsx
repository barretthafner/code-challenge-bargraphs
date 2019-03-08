import React from 'react';
import styles from './single-bar.module.scss';

type Props = {
	left?: any;
	right?: any;
	title: string;
};

const SingleBar: React.FunctionComponent<Props> = ({ left, right, title }) => {
	return <div className={styles.singleBar}>{title}</div>;
};

export default SingleBar;
