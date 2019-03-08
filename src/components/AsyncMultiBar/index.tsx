import * as React from 'react';

import SingleBar, { SingleBarProps } from '../SingleBar';
import MultiBar from '../MultiBar';

/**
 * PropType definition
 */
export interface AsyncMultiBarProps {
	endpoint: string;
}

/**
 * AsyncMulitBar Compoennt
 */
const AsyncMultiBar: React.FunctionComponent<AsyncMultiBarProps> = ({
	endpoint,
}) => {
	const [values, setValues] = React.useState([] as SingleBarProps[]);

	/**
	 * fetchValues
	 * Fetch value from the api and set them
	 */
	const fetchValues = async () => {
		const response = await fetch(endpoint);
		const data = await response.json();
		setValues(mapData(data));
	};

	/**
	 * React effects
	 */
	React.useEffect(() => {
		setTimeout(fetchValues, 1000);
		// fetchValues();
	}, []);

	/**
	 * Render content
	 */
	return (
		<div>
			{values.length > 0 ? <MultiBar values={values} /> : <div>Loading...</div>}
		</div>
	);
};

/**
 * Helper function to map data from the api
 */
function mapData(data: any[]): SingleBarProps[] {
	return data.reduce(
		(
			acc: SingleBarProps[],
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
						color: '#16B217',
					};
				else
					acc.right = {
						...valueData,
						color: '#C71113',
					};

				return acc;
			}, {});

			// add formatted SingleBarProps to return array
			return acc.concat({
				title: name,
				...values,
			});
		},
		[] as SingleBarProps[]
	);
}

export default AsyncMultiBar;
