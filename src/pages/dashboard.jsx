import React from 'react';
import LeftPane from '../components/leftPane';
import Header from '../components/header';

const Dashboard = (props) => {
    return ( 
    <div>
        <LeftPane/>
        <Header style={headerStyle}/>
    </div> 
    );
}

let headerStyle = {
    position:'absolute',
    top:'2rem',
    right:'15rem',
}

 
export default Dashboard;