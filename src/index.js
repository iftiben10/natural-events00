import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App path='/' />
  </React.StrictMode>,
  document.getElementById('root')).listen(3000, () => console.log(`Server is listening on port ${3000}...`));
