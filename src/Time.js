import React, { Component } from 'react';

class Time extends Component {
    render() {
        const {displayLength, isBreak} = this.props
        const sessionOrBreak = isBreak? 'Break' : 'Session';
        return (
            <div className='external-div-time'>
                <p id="timer-label">{sessionOrBreak}</p>
                <p id="time-left" className='timer'>{displayLength}</p>
            </div>
        )
    }
}

export default Time;

