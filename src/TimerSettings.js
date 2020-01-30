import React, { Component } from 'react';

class TimerSettings extends Component {
    render() {
        const {handleTimerSettings, isPlaying} = this.props
        const image = isPlaying? 'https://cdn0.iconfinder.com/data/icons/media-yellow/60/004_-_Pause-512.png' : 'https://cdn0.iconfinder.com/data/icons/media-yellow/60/001_-_play-512.png'
        //<div><img id='' src='https://cdn0.iconfinder.com/data/icons/media-yellow/60/004_-_Pause-512.png' alt='' /></div>
        return (
            <div className='external-div-timer-settings'>
                <div onClick={handleTimerSettings} ><img id="start_stop" src={image} alt='' /></div>
                <div onClick={handleTimerSettings} ><img id='reset' src='https://cdn0.iconfinder.com/data/icons/media-yellow/60/017_-_Reload-512.png' alt='' /></div>
            </div>
        )
    }
}

export default TimerSettings;