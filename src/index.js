import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/** auth stuff
 * Provide access to our store for our app.
 * this will ensure that our app and all its components can have access to the details in our redux store.
 * we also need to import our store and pass it as a property.
 */
import {Provider} from 'react-redux';
import store from './auth/store';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* pass the store as a property */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



