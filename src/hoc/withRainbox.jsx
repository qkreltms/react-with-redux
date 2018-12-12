import React from 'react';

const withRainbow = (WrappedComponent) => {
    const colors = ['red', 'blue', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * 3)];
    const className = randomColor + '-text';

    return ( props ) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    };
}
 
export default withRainbow;