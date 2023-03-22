import React from 'react';

import WindowPanel from './windowPanel';
import MenuBar from './utility/menuBar';

import homeIcon from '../assets/icons/home.svg'
import crisisIcon from '../assets/icons/crisisAlert.svg'
import databaseIcon from '../assets/icons/database.svg'
import settingsIcon from '../assets/icons/settings.svg'
import support from '../assets/icons/support.svg'
import instruction from '../assets/icons/instruction.svg'
import eythorLogo from '../assets/icons/eythorLogo.svg'


const windowData = [
    {icon:homeIcon, text:'Home' },
    {icon:crisisIcon, text:'Troubleshoot' },
    {icon:databaseIcon, text:'Database' },
    {icon:settingsIcon, text:'Set Parameters' },
];

const supportData = [
    {icon:support, text:'Instructions' },
    {icon:instruction, text:'Support Desk' },
]



const LeftPane = (props) => {

    if(props.style)
    LeftPaneStyle = {...LeftPaneStyle , ...props.style}

    return (
        <div style={LeftPaneStyle}>

            <div style={{display:'flex',paddingTop:'2rem'}}>
            <MenuBar style={{marginLeft:'1rem'}}/> 
            <img src={eythorLogo} alt="eythorLogo" style={logoStyle}/>

            </div>


            <WindowPanel style={{marginTop:'1rem'}}rowData={windowData}/>
            <WindowPanel style={{ position: 'absolute',bottom:'4rem'}}rowData={supportData}/>
        </div> 
     );
}
 

//********   Styles below ************

let LeftPaneStyle = {
    width:'fit-content',
    height:'100vh',
    position: 'relative',
    borderRight:'1px solid #D9D9D9',
    boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
}

let logoStyle = {
    marginLeft: '2rem',
    width:'6.6rem',
    height:'1.5rem',

}


export default LeftPane;