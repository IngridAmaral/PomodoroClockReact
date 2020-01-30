import React, { Component } from 'react';

class TimerSettings extends Component {
    render() {
        //<div><img id='' src='https://cdn0.iconfinder.com/data/icons/media-yellow/60/004_-_Pause-512.png' alt='' /></div>
        return (
            <div className='external-div-timer-settings'>
                <div><img id="start_stop" src='https://cdn0.iconfinder.com/data/icons/media-yellow/60/001_-_play-512.png' alt='' /></div>
                <div><img id='reset' src='https://cdn0.iconfinder.com/data/icons/media-yellow/60/017_-_Reload-512.png' alt='' /></div>
            </div>
        )
    }
}

export default TimerSettings;