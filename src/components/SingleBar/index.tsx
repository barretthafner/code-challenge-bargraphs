import React from 'react';
import styles from './SingleBar.module.scss';

import { BarValuePropType } from '../types';

interface Props {
	left: BarValuePropType;
	right: BarValuePropType;
	title: string;
}

const SingleBar: React.FunctionComponent<Props> = ({ left, right, title }) => {
	return <div className={styles.singleBar}>{title}</div>;
};

export default SingleBar;
