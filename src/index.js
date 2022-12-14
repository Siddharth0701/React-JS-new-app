import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <header>
    <h1>
      This is my headerk
    </h1>
    </header>
    <div>
      <h1>This is my Sidebar</h1>
    </div>
    <footer>
      <h1>
        This is my footer
      </h1>
    </footer>
  </>
  
  // <React.StrictMode>
  //   <App />

  //   {/* <User/> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
