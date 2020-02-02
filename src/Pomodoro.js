import React, { Component } from 'react';
import Time from './Time.js';
import Header from './Header';
import TimerSettings from './TimerSettings';

class Pomodoro extends Component {
    state = {
        breakLength: 5,
        sessionLength: 25,
        displayLength: '25:00',
        isBreak: false,
        isPlaying: false,
        playBeep: false,
        reset: false
    }

    handleIncrementAndDecrement = (e) => {
        const target = e.target.id
        let breakLength = this.state.breakLength;
        let sessionLength = this.state.sessionLength;
        if (target === 'break-increment' && breakLength < 60) {
            breakLength++
        } else if (target === 'break-decrement' && breakLength > 1) {
            breakLength--
        }

        if (target === 'session-increment' && sessionLength < 60) {
            sessionLength++
        } else if (target === 'session-decrement' && sessionLength > 1) {
            sessionLength--
        }

        this.setState({
            sessionLength,
            breakLength,
            displayLength: this.handleZerosMMSS(sessionLength)
        })
    }

    handleZerosMMSS(timeLengh) {
        return timeLengh < 10
        ? '0' + timeLengh + ':00'
        : timeLengh + ':00'
    }

    handleReset = (e) => {
        console.log(e.target.id)
        this.setState((state) => ({
            breakLength: 5,
            sessionLength: 25,
            displayLength: '25:00',
            isBreak: false,
            isPlaying: false,
            playBeep: false,
            reset: true
        }))
        this.audioBeep.pause()
        this.audioBeep.currentTime = 0;
    }

    audioBeep = () => {

    }

    handleCountDown = (e) => {
        const [displayMin, displaySec] = this.state.displayLength.split(':')
        const breakLengthDisplay = this.handleZerosMMSS(this.state.breakLength) 
        const sessionLengthDisplay = this.handleZerosMMSS(this.state.sessionLength)
        const sumOfMinAndSecDisplay = Number(displayMin * 60) + Number(displaySec);
        let timer = sumOfMinAndSecDisplay -1;

        let timerInt = setInterval(() => {
            if (this.state.reset) { clearInterval(timerInt) }
            
            let minutes = Math.floor(timer / 60);
            let seconds = Math.floor(timer % 60);
            let displayed;
            let { isBreak } = this.state;       

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            displayed = minutes + ":" + seconds
            console.log(minutes, seconds)

            if (minutes ==='00' && seconds === '00'){
                this.audioBeep.play();
            }

            if (timer >= 0 && this.state.isPlaying) {
                timer--;
            } else if (timer < 0 && this.state.isPlaying) {
                isBreak = !isBreak;
                timer = isBreak ? this.state.breakLength * 60 -1 : this.state.sessionLength * 60 -1;
                displayed = isBreak ? breakLengthDisplay : sessionLengthDisplay;
            } else {
                clearInterval(timerInt)
                return
            } 

            this.setState({
                displayLength: displayed,
                isBreak
            })

            console.log(
                ' isBreak? ', isBreak,
                ' Beak Length: ', breakLengthDisplay,
                ' Session Length: ', sessionLengthDisplay,
                ' Timer: ', timer,
                ' Timer in MM:SS : ', minutes + ":" + seconds,
                ' Display: ', this.state.displayLength)

        }, 1000)

        this.setState((state) => ({
            isPlaying: !state.isPlaying,
            reset: false,
        }))
    }

    render() {
        //console.log(this.state.playBeep)
        return (
            <div className='external-div'>
                <Header
                    handleIncrementAndDecrement={this.handleIncrementAndDecrement}
                    sessionLength={this.state.sessionLength}
                    breakLength={this.state.breakLength}
                />
                <Time
                    displayLength={this.state.displayLength}
                    isBreak={this.state.isBreak}
                />
                <TimerSettings
                    handleCountDown={this.handleCountDown}
                    isPlaying={this.state.isPlaying}
                    handleReset={this.handleReset}
                />
                <audio id="beep" preload="auto" 
                    src="https://goo.gl/65cBl1"
                    ref={(audio) => { this.audioBeep = audio; }} />
            </div>
        )
    }
}

export default Pomodoro;