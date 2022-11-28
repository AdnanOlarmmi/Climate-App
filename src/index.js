/*eslint-disable */
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode> 
);

