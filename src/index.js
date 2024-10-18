import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { routes } from './routes';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes);
root.render(
  <>
      <Navbar router = {router} />
      <RouterProvider router = {router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
