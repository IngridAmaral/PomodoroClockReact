import React, { Component } from 'react';

class HeaderTimeLength extends Component {
    render() {
        const {handleIncrementAndDecrement, sessionLength, breakLength} = this.props
        const up = 'https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_full_up-512.png';
        const down = 'https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_full_down-512.png';
        return (
            <div className='external-div-header-timer-length'>
                <div>
                    <p id='break-label'>Break Length</p>
                    <div className='increment-decrement'>
                        <div>
                            <img onClick={handleIncrementAndDecrement} id="break-increment" src={up} alt='' />
                        </div>
                        <p id="break-length">{breakLength}</p>
                        <div>
                            <img onClick={handleIncrementAndDecrement} id="break-decrement" src={down} alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <p id="session-label">Session Length</p>
                    <div className='increment-decrement'>
                        <div onClick={handleIncrementAndDecrement}>
                            <img id="session-increment" src={up} alt='' />
                        </div>
                        <p id="session-length">{sessionLength}</p>
                        <div onClick={handleIncrementAndDecrement}>
                            <img id="session-decrement" src={down} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderTimeLength;