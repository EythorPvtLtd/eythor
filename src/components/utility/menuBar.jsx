import React from 'react';

const MenuBar = (props) => {
 

    return ( 
    <div className="container" style={props.style} onClick={()=>{console.log('clicked')}}>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
    </div>
    );
}

let barStyle = {
    width: '1.5rem',
    height: '0.2rem',
    backgroundColor: '#333',
    margin: '0.3rem 0',
}



 
export default MenuBar;