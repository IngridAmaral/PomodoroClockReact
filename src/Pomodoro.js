import React, { Component } from 'react';
import Time from './Time.js';
import Header from './Header';
import TimerSettings from './TimerSettings';

class Pomodoro extends Component {
    state = {
        breakLength: 5,
        sessionLength: 25,
        displayLength: 25,
        isBreakorSession: false,
        isPlaying: false,
    }

    handleIncrementAndDecrement = (e) => {
        console.log(e.target.id)
    }

    render() {
        return (
            <div className='external-div'>
                <Header handleIncrementAndDecrement={this.handleIncrementAndDecrement} />
                <Time />
                <TimerSettings />
            </div>
        )
    }
}

export default Pomodoro;