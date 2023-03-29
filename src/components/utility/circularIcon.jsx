import React from "react";
import { css } from '@emotion/css'

const CircularIcon = (props) => {
    const {icon:Icon , onClick} = props;   //destructuring syntax in js components first letter must be caps
    return ( 
    <span className={iconStyle} onClick={onClick} >
        {/* //this is the svg component that we get */}
        <Icon/>     
    </span> 
    );
}
 
const iconStyle = css`
    display:flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 4rem;
    height: 4rem;
    background: #FFFFFF;
    border: 1px solid #3887EA;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    &:hover {
        background: #3887EA;
    }
    &:hover > svg >path{
        fill: #FFFFFF;
    }
`

export default CircularIcon;