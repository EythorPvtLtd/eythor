import React from 'react';
import { css } from '@emotion/css';
const InfoBar = (props) => {
    const {data} = props
    return ( 
        <div style={infoBarStyle}>
            <input type="checkbox" className={checkboxStyle}/>
            <div>G34R12389</div>
            <div className={border}/>
            <div>Brush Replacement </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>Time - 2:30 pm  </div>
            <div>Monday, 2023 </div>
        </div>
    );
}
const infoBarStyle = {
    display:'flex',
    padding: '19px 34px',
    gap: '45px',
}

const checkboxStyle = css`
box-sizing: border-box;
background: #FFFFFF;
border: 3px solid #000000;
border-radius: 5px;
`

const border = css`
    Float:left;
    width:1px; /* edit this if you want */
    background-color:black;
`


export default InfoBar;