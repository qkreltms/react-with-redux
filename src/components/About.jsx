import React from 'react';
import withRainbow from '../hoc/withRainbox';

const About = () => {
    return ( 
        <div className="container">
            <h4 className="center">About</h4>
            <p>This is about yay!</p>
        </div>
     );
}
 
export default withRainbow(About);