import React, { Component } from 'react';

class HeaderTimeLength extends Component {
    render() {
        const {handleIncrementAndDecrement} = this.props
        return (
            <div className='external-div-header-timer-length'>
                <div>
                    <p id='break-label'>Break Length</p>
                    <div className='increment-decrement'>
                        <div onClick={handleIncrementAndDecrement}><img id="break-increment" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_full_up-512.png" alt='' /></div>
                        <p id="break-length">5</p>
                        <div onClick={handleIncrementAndDecrement}><img id="break-decrement" src='https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_full_down-512.png' alt='' /></div>
                    </div>
                </div>
                <div>
                    <p id="session-label">Session Length</p>
                    <div className='increment-decrement'>
                        <div onClick={handleIncrementAndDecrement}><img id="session-increment" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_full_up-512.png" alt='' /></div>
                        <p id="session-length">25</p>
                        <div onClick={handleIncrementAndDecrement}><img id="session-decrement" src='https://cdn2.iconfinder.com/data/icons/picol-vector/32/arrow_full_down-512.png' alt='' /></div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default HeaderTimeLength;