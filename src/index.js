import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./theme.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <div>
      <Theme appearance="dark">
        <App />
      </Theme>
    </div>
  </BrowserRouter>,
  rootElement
);

