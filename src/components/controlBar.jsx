import React from 'react';
import CircularIcon from './utility/circularIcon';

import {ReactComponent as Apps} from '../assets/icons/apps.svg';
import {ReactComponent as DeviceReset} from '../assets/icons/device_reset.svg';
import {ReactComponent as FastForward} from '../assets/icons/fast_forward.svg';
import {ReactComponent as FastRewind} from '../assets/icons/fast_rewind.svg';
import {ReactComponent as Mop} from '../assets/icons/mop.svg';
import {ReactComponent as Speed} from '../assets/icons/speed.svg';
import {ReactComponent as Stop} from '../assets/icons/stop.svg';

import { io } from "socket.io-client";
const socket = io(process.env.REACT_APP_BACKEND_SERVER);


const ControlBar = (props) => {

    
    const handleClickStop = (event)=>{
        socket.emit('stop', "Motor is stop");
        console.log('stopped button clicked');
    };

    const handleClickForward = (event)=>{
        socket.emit('forward', "Motor is stop");
        console.log('forward button clicked');
    };

    const handleClickBackward = (event)=>{
        socket.emit('backward', "Motor is stop");
        console.log('backward button clicked');
    };


    const controlBarStyle = {
        display:'flex',
        gap: '0.6rem',
        position:'absolute',
        left: '38.89%',
        bottom: '7.43%',
    }


    return ( 
        <div style={controlBarStyle}>
            <CircularIcon icon={Apps}/>
            <CircularIcon icon={Mop}/>
            <CircularIcon icon={FastRewind} onClick={handleClickBackward}/>
            <CircularIcon icon={Stop} onClick={handleClickStop}/>
            <CircularIcon icon={FastForward} onClick={handleClickForward}/>
            <CircularIcon icon={DeviceReset}/>
            <CircularIcon icon={Speed}/>
        </div>
    );
}
 

export default ControlBar;