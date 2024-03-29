import React from 'react';

import { useState } from 'react';

import WindowPanel from './utility/windowPanel';
import MenuBar from './utility/menuBar';

import {ReactComponent as HomeIcon} from '../assets/icons/home.svg'
import {ReactComponent as CrisisIcon} from '../assets/icons/crisisAlert.svg'
import {ReactComponent as DatabaseIcon} from '../assets/icons/database.svg'
import {ReactComponent as SettingsIcon} from '../assets/icons/settings.svg'
import {ReactComponent as Support} from '../assets/icons/support.svg'
import {ReactComponent as Instruction} from '../assets/icons/instruction.svg'
import {ReactComponent as EythorLogo} from '../assets/icons/eythorLogo.svg'





const LeftPane = (props) => {
    
    const {handleSetSection} = props;
    
    if(props.style)
    LeftPaneStyle = {...LeftPaneStyle , ...props.style}
    
    const windowData = [
        {icon:HomeIcon, text:'Home',handleOnClick:()=>{handleSetSection('Home')}},
        {icon:CrisisIcon, text:'Troubleshoot',handleOnClick:()=>{handleSetSection('Troubleshoot')}},
        {icon:DatabaseIcon, text:'Database',handleOnClick:()=>{handleSetSection('Database')} },
        {icon:SettingsIcon, text:'Set Parameters' },
    ];
    
    const supportData = [
        {icon:Support, text:'Instructions' },
        {icon:Instruction, text:'Support Desk' },
    ]
    

    return (
        <div style={LeftPaneStyle}>

            <div style={{display:'flex',paddingTop:'2rem'}}>
            <MenuBar style={{marginLeft:'1rem'}}/> 
            <EythorLogo style={logoStyle}/>
            </div>


            <WindowPanel style={{marginTop:'1rem'}} rowData={windowData}/>
            <WindowPanel style={{ position: 'absolute',bottom:'4rem'}} rowData={supportData}/>
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
    backgroundColor:'#FFFFFF',
}

let logoStyle = {
    marginLeft: '0.5rem',
    width:'12rem',
    // height:'1.5rem',

}


export default LeftPane;