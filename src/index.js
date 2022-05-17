import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';

import MenuBar from "./components/MenuBar";
import HeaderBar from "./components/HeaderBar";
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div id='main'>
		<MenuBar />
		<div id="mainBody">
			<HeaderBar
				crewMates={16}
				active={9}
				time={"GMT +09:00"}
			/>
			<Content />
		</div>
	</div>
);