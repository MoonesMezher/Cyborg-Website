import React, { Component } from 'react'
import Img from '../../../assets/images/profile.jpg'
import Btn from '../../container/Btn';

class Info extends Component {
    render() {
        return (
            <div className='info d-flex justify-content-between align-items-center gap-4 flex-wrap pb-4'>
                <div className='img'>
                    <img src={Img} alt="profile" className='rounded-5 w-100 h-100' />
                </div>
                <div className='details'>
                    <span className='bg-pink p-2 rounded-5 text-white'>offline</span>
                    <h3 className='text-white mt-3 fw-bold'>alan smithee</h3>
                    <p className='text-secondary lh-lg'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    <Btn name="start live stream" link="../streams"/>
                </div>
                <div className='data rounded-5 bg-greyAlt p-4'>
                    <div className='li d-flex py-3 justify-content-between align-items-center gap-1'>
                        <span className='text-secondary'>games downloaded</span>
                        <span className='text-pink'>3</span>
                    </div>
                    <div className='li d-flex py-3 justify-content-between align-items-center gap-1'>
                        <span className='text-secondary'>friends online</span>
                        <span className='text-pink'>16</span>
                    </div>
                    <div className='li d-flex py-3 justify-content-between align-items-center gap-1'>
                        <span className='text-secondary'>live streams</span>
                        <span className='text-pink'>none</span>
                    </div>
                    <div className='li d-flex py-3 justify-content-between align-items-center gap-1'>
                        <span className='text-secondary'>clips</span>
                        <span className='text-pink'>29</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;
