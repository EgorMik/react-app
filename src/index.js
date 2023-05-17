import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import './public/stylesheet/main.scss';
import App from './components/templates/App';
import store from './store'
//import ReactDOM from 'react-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store={store}>
		<App/>
	</Provider>
	);
// ReactDOM.render(
// 	<React.StrictMode>
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
//   );