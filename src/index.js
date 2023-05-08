import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import './public/stylesheet/main.scss';
import App from './components/templates/App';
import store from './store'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<React.StrictMode>
<Provider store={store}>
		<App/>
	</Provider>
</React.StrictMode>);
