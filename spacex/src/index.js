import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Analytics from './pages/Analytics';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/analytics",
    element: <Analytics />
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
