import React from 'react';
import LeftPane from '../components/leftPane';
import Header from '../components/header';
import ControlBar from '../components/controlBar';
import InfoBox from '../components/infoBox';
import DatabaseBox from '../components/databaseBox';
import { useState} from 'react';



const Dashboard = (props) => {
    const [section , setSection] = useState('Home');

    let headerStyle = {
        position:'absolute',
        top:'2rem',
        right:'15rem',
    }

    return ( 
    <div>
        <LeftPane handleSetSection={setSection}/>
        <Header style={headerStyle}/>
        {section==='Home' && <ControlBar/>}
        {section==='Troubleshoot' && <InfoBox/>}
        {section==='Database' && <DatabaseBox/>}

    </div> 
    );
}


 
export default Dashboard;