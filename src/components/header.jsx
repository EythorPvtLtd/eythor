import React from 'react';
import SearchBar from './utility/searchBar';

import {ReactComponent as AccountCircle} from '../assets/icons/accountCircle.svg'
import { ReactComponent as MediumRisk } from '../assets/icons/mediumRisk.svg'
const Header = (props) => {
    if(props.style)
    headerStyle = {...headerStyle , ...props.style};
    return ( 
        <div style={headerStyle} >
            <SearchBar/>
            <MediumRisk style={{position:'absolute',height:'2rem',left:'8rem',top:'-0.8rem'}}/>
            <AccountCircle style={{position:'absolute',height:'2rem',left:'11rem',top:'-0.8rem'}}/>
        </div>
     );
}
 

let headerStyle = {
    position:'absolute',
}
export default Header;