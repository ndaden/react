import React from 'react';
import LikeButton from './LikeButton.jsx';

class HelloWorld extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World from REACT</h1>
                <LikeButton/>
            </div>
        );
    }
}

export default HelloWorld;