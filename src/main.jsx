import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import AppContextProvider from './components/AppContextProvider.jsx';
import './index.css';

ReactDOM.render(
 <React.StrictMode>
   <AppContextProvider>
      <App />
   </AppContextProvider>
 </React.StrictMode>,
  document.getElementById('root')
);