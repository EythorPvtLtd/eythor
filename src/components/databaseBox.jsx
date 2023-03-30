import React from 'react';
import TableHeader from './utility/tableHeader';
import InfoBox from './infoBox'

const DatabaseBox = (props) => {
    return ( 
    <div style={databaseBoxStyle}>
        <TableHeader/>
        <InfoBox style={infoBoxStyle}/>
    </div> );
}
 
const databaseBoxStyle = {
    position:'absolute',
    left: '18rem',
    bottom: '0rem',
    width:'calc(100vw - 18rem)',
    maxHeight:'80vh',
    overflowY: 'auto',
    backgroundColor:'#FFFFFF',
}

const infoBoxStyle = {
    position:'static',
    maxHeight:'80vh',
}




export default DatabaseBox;