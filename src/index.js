import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/Post';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { 
    path:'/', 
    element: <RootLayout/> ,
    children :[
      {
        path: '/', 
        element: <App />,
        children :[
          {
            path: 'create-post', 
            element: <NewPost/>
          },
        ]
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
