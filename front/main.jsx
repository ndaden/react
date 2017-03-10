import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';

window.onload = () => {
    ReactDOM.render(<HelloWorld/>, document.getElementById('content'));
};