import React from 'react';
import './styles.js'

import HeaderApp from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Stores from './components/Stores'
import MapContainer from './components/MyMap'
import Footer from './components/Footer'

function App() {
return (
	<div>
		<HeaderApp />
		<About />
		<Services />
		<Stores />
		<MapContainer />
		<Footer />
	</div>
);
}

export default App;
