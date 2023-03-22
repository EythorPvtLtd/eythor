import React from 'react';
import { useState } from 'react';

const IconText = (props) => {
    const {data} = props; // data = {icon , text}
    const [icon , setIcon] = useState(data.icon);






    
    return ( 
        <div style={divStyle} >
            <img src={icon} style={imgStyle}/> {data.text}
        </div>
     );
}


const divStyle = {
    display:'flex',
    fontWeight:'500',
    width:'16rem',
    height: '3rem',
    paddingLeft:'2rem',
    alignItems: 'center',
}

const imgStyle = {
    width:'1rem',
    height:'1rem',
    marginRight: '1rem',
}

 
export default IconText;