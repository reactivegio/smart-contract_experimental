import React from 'react';
import ReactDOM from 'react-dom/client';
import { DAppProvider, Localhost } from "@usedapp/core";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
  // readOnlyChainId: Localhost.chainId,
  readOnlyUrls: {
    [Localhost.chainId]: 'http://127.0.0.1:8545',
  },
  // networks: [Localhost]
  // notification check every 10 seconds
  notifications: {
    expirationPeriod: 10000,
    checkInterval: 10000
  }
}

root.render(
  <DAppProvider config={config}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
