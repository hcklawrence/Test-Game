import React from 'react';
import { createRoot } from 'react-dom/client';
import CubeWorld from './components/CubeWorld';
import './styles/normalize.css'
import './styles/index.css';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<CubeWorld color='#195823' bgColor="#141622" />
	</React.StrictMode>,
);
