import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
function ref() {
    root.render(<App/>);
}
// sets reloading intervals to ensure updating of the page
setInterval(ref, 1000);