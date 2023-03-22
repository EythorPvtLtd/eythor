import React from 'react';
import IconText from './utility/iconText';


const WindowPanel = (props) => {

    const {rowData,style} = props;

    return ( 
        <div style={style}>
            {rowData.map((row,idx)=>(<IconText key={idx}data={row}/>))}
        </div>
    );
}


 
export default WindowPanel;