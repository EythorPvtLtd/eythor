import React from 'react';
import LeftPane from '../components/leftPane';
import Header from '../components/header';
import ControlBar from '../components/controlBar';
import InfoBox from '../components/infoBox';
import { useState} from 'react';



const Dashboard = (props) => {
    const [section , setSection] = useState('Home');


    return ( 
    <div>
        <LeftPane handleSetSection={setSection}/>
        <Header style={headerStyle}/>
        {section==='Home' && <ControlBar/>}
        {section==='Troubleshoot' && <InfoBox/>}

    </div> 
    );
}

let headerStyle = {
    position:'absolute',
    top:'2rem',
    right:'15rem',
}

 
export default Dashboard;