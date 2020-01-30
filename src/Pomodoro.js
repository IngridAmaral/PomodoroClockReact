import React, { Component } from 'react';
import Time from './Time.js';
import Header from './Header';
import TimerSettings from './TimerSettings';

class Pomodoro extends Component {
    state = {
        breakLength: 5,
        sessionLength: 25,
        displayLength: 25,
        isBreak: false,
        isPlaying: false,
    }
    

    handleIncrementAndDecrement = (e) => {
        const target = e.target.id
        let breakLength = this.state.breakLength;
        let sessionLength = this.state.sessionLength;
        if (target === 'break-increment' && breakLength < 60) {
            breakLength++
        } else if( target === 'break-decrement' && breakLength > 0){
            breakLength--
        }

        if (target === 'session-increment' && sessionLength < 60) {
            sessionLength++ 
        } else if( target === 'session-decrement' && sessionLength > 0){
            sessionLength--           
        }
        this.setState({sessionLength, breakLength, displayLength: sessionLength})
    }

    handleTimerSettings = (e) => {
        const target = e.target.id
        if (target === 'reset') {
            this.setState({
                breakLength: 5,
                sessionLength: 25,
                displayLength: 25,
                isBreak: false,
                isPlaying: false,
            })
        } else if (target === 'start_stop') {
            this.setState((state) => ({
                isPlaying: !state.isPlaying,
            }))
        }
    }

    render() {
        return (
            <div className='external-div'>
                <Header 
                    handleIncrementAndDecrement={this.handleIncrementAndDecrement} 
                    sessionLength={this.state.sessionLength}
                    breakLength={this.state.breakLength}
                />
                <Time 
                    displayLength={this.state.displayLength}
                />
                <TimerSettings 
                    isPlaying={this.state.isPlaying} 
                    handleTimerSettings={this.handleTimerSettings} 
                />
            </div>
        )
    }
}

export default Pomodoro;