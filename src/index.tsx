import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/style/index.css';
import {StyleProvider} from '@ant-design/cssinjs';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<StyleProvider hashPriority='high'>
			<App />
		</StyleProvider>
	</React.StrictMode>,
);
