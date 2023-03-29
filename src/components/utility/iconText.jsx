import React from 'react';
import { css } from '@emotion/css';
import { useState } from 'react';

const IconText = (props) => {
    const {data} = props; // data = {icon , text,onClick}
    const [Icon , setIcon] = useState(data.icon);



    return ( 
        <div className={divStyle} onClick={data.handleOnClick}>
            <Icon className={imgStyle}/> {data.text}
        </div>
     );
}


const divStyle = css`
    display: flex;
    font-weight: 500;
    width: 16rem;
    height:  3rem;
    padding-left: 2rem;
    align-items:  center;

    &:hover{
        color:#3887EA;
        > svg >path{
            fill: #3887EA;
        } 
    }

`

const imgStyle = css`
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;

`

 
export default IconText;