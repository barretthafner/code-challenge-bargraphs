import React, { Component } from 'react';
import logo from './logo.svg';

import SingleBar from './components/single-bar';

class App extends Component {
	render() {
		return (
			<>
				<SingleBar title="Tasks Completed" />
			</>
		);
	}
}

export default App;
