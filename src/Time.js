import React, { Component } from 'react';

class Time extends Component {
    render() {
        const {displayLength} = this.props
        return (
            <div className='external-div-time'>
                <p id="timer-label">Session</p>
                <p id="time-left" className='timer'>{displayLength}:00</p>
            </div>
        )
    }
}

export default Time;