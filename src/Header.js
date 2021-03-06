import React, { Component } from 'react';
import HeaderTimeLength from './HeaderTimeLength.js';

class Header extends Component {
    render() {
        const { handleIncrementAndDecrement, sessionLength, breakLength } = this.props
        return (
            <div className='external-div-header'>
                <p className='pomodoro-label'>Pomodoro Clock</p>
                <HeaderTimeLength 
                    handleIncrementAndDecrement={handleIncrementAndDecrement}
                    sessionLength={sessionLength}
                    breakLength={breakLength}
                 />
            </div>
        )
    }
}

export default Header;