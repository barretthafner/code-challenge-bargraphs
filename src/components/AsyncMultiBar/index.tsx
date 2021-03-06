import * as React from 'react';

import { ISingleBar } from '../SingleBar';
import MultiBar from '../MultiBar';

import styles from './AsyncMultiBar.module.scss';

const BarColorGreen = '#16B217';
const BarColorRed = '#C71113';

/**
 * IAsyncMultiBar
 */
export interface IAsyncMultiBar {
	endpoint: string;
}

/**
 * AsyncMultiBar Component
 */
const AsyncMultiBar: React.FunctionComponent<IAsyncMultiBar> = ({
	endpoint,
}) => {
	const [values, setValues] = React.useState([] as ISingleBar[]);
	const [ok, setOk] = React.useState(true);

	/**
	 * fetchValues
	 * Fetch data from the api, transform it, and set it to state
	 */
	const fetchValues = async () => {
		const response = await fetch(endpoint);

		if (response.ok === false) return setOk(false);
		const data = await response.json();
		setValues(mapData(data));
	};

	/**
	 * Run Fetch data on mount only
	 */
	React.useEffect(() => {
		// setTimeout(fetchValues, 1000);
		fetchValues();
	}, []);

	/**
	 * Render content
	 */
	return (
		<>
			{(() => {
				if (!ok)
					return <div className={styles.error}>❌ Error Contacting Server</div>;
				else if (values.length > 0) return <MultiBar values={values} />;
				else return <div className={styles.loading}>Loading...</div>;
			})()}
		</>
	);
};

/**
 * Helper function to map data from the api
 */
function mapData(data: any[]): ISingleBar[] {
	return data.reduce(
		(
			acc: ISingleBar[],
			{ name, ...rest }: { name: string; [rest: string]: string }
		) => {
			const keys = Object.keys(rest);

			// if no title or not exactly two entries skip and log an error
			// TODO: add error handling
			if (!name || keys.length !== 2) {
				console.error(
					`Error in AsyncMultiBar:render() :: ${name} data fetched from api is invalid`
				);
				return acc;
			}

			// format values into expected object definition
			const values = keys.reduce((acc: any, key: string, index: number) => {
				const valueData = {
					description: key,
					value: rest[key],
				};

				if (index === 0)
					acc.left = {
						...valueData,
						color: BarColorGreen,
					};
				else
					acc.right = {
						...valueData,
						color: BarColorRed,
					};

				return acc;
			}, {});

			// add formatted ISingleBar to return array
			return acc.concat({
				title: name,
				...values,
			});
		},
		[] as ISingleBar[]
	);
}

export default AsyncMultiBar;
