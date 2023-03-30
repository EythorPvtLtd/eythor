import React from 'react';
import { css } from '@emotion/css';

const TableHeader = (props) => {
    return ( 
        <div className={tableHeaderStyle}>
            <span>Event Maintenence</span>
            <div className={border}/>
            <span>Real Status Events</span>
            <span>Fault Events</span>
            <span>Clock Error Events</span>
            <span>Error Log</span>
        </div>
    );
}

const tableHeaderStyle = css`
    display:flex;
    padding: 19px 34px;
    gap: 45px;
    border-radius: 40px 40px 0px 0px;
`
const border = css`
    Float:left;
    width:1px; /* edit this if you want */
    background-color:black;
`


export default TableHeader;