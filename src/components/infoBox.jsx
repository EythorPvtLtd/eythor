import React from 'react'
import InfoBar from '../components/utility/infoBar'


const InfoBox = (props)=>{

    
    let infoBoxStyle = {
        
        position:'absolute',
        left: '18rem',
        bottom: '0rem',
        width:'calc(100vw - 18rem)',
        maxHeight:'16rem',
        overflowY: 'auto',
        backgroundColor:'#FFFFFF',
    }

    if(props.style)
    infoBoxStyle = {...infoBoxStyle,...props.style};
    
    return (
        <div style={infoBoxStyle}>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
            <InfoBar/>
        </div>
    );
};




export default InfoBox;